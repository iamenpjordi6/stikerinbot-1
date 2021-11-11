let fetch = require('node-fetch')
let winScore = 500
async function handler(m) {
    this.game = this.game ? this.game : {}
    let id = 'family100_' + m.chat
    if (id in this.game) {
        this.sendButton(m.chat, 'There are still unanswered quizzes in this chat', '© MilfBOT', 'Give UP', 'giveup', this.game[id].msg)
        throw false
    }
    let src = await (await fetch('https://gist.githubusercontent.com/iamenpjordi6/679cc869a61daa3aa45f71549c776faf/raw/family100.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*Question:* ${json.question}

There is *${json.answer.length}* answer${json.answer.find(v => v.includes(' ')) ? `
(some answers have spaces)
`: ''}

+${winScore} XP every answer is correct
    `.trim()
    this.game[id] = {
        id,
        msg: await this.sendButton(m.chat, caption, '© MilfBOT', 'Give UP', 'giveup', m),
        ...json,
        Answered: Array.from(json.answer, () => false),
        winScore,
    }
}
handler.help = ['family100']
handler.tags = ['game']
handler.command = /^family100$/i

module.exports = handler
