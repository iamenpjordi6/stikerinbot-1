const similarity = require('similarity')
const threshold = 0.72 // semakin tinggi nilai, semakin mirip
module.exports = {
    async before(m) {
        this.game = this.game ? this.game : {}
        let id = 'family100_' + m.chat
        if (!(id in this.game)) return !0
        let room = this.game[id]
        let text = m.text.toLowerCase().replace(/[^\w\s\-]+/, '')
        let isSurrender = /^((me)?giveup|surr?ender)$/i.test(m.text)
        if (!isSurrender) {
            let index = room.answer.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === text)
            if (index < 0) {
                if (Math.max(...room.answer.filter((_, index) => !room.answered[index]).map(answer => similarity(answer, text))) >= threshold) m.reply('You are close!')
                return !0
            }
            if (room.answered[index]) return !0
            let users = global.db.data.users[m.sender]
            room.answered[index] = m.sender
            users.exp += room.winScore
        }
        let isWin = room.answered.length === room.answered.filter(v => v).length
        let caption = `
*Question:* ${room.question}

Terdapat *${room.answer.length}* answer${room.answer.find(v => v.includes(' ')) ? `
(some answers have spaces)
`: ''}
${isWin ? `*ALL ANSWERS*` : isSurrender ? '*SURRENDERED!*' : ''}
${Array.from(room.answer, (answer, index) => {
            return isSurrender || room.answered[index] ? `(${index + 1}) ${answer} ${room.answered[index] ? '@' + room.answered[index].split('@')[0] : ''}`.trim() : false
        }).filter(v => v).join('\n')}

${isSurrender ? '' : `+${room.winScore} XP every answer is correct`}
    `.trim()
        await this.sendButton(m.chat, caption, '© MilfBOT', `${isWin ? 'Family 100' : isSurrender ? 'Family 100' : 'Give UP'}`, `${isWin ? ',family100' : isSurrender ? ',family100' : 'giveup'}`, m, {
            contextInfo: {
                mentionedJid: this.parseMention(caption)
            }
        }).then(msg => {
            return this.game[id].msg = msg
        }).catch(_ => _)
        if (isWin || isSurrender) delete this.game[id]
        return !0
    }
}
