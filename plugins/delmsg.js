let handler = async (m, { command, usedPrefix, text }) => {
    let which = command.replace(/del/i, '')
    if (!text) throw `Use *${usedPrefix}list${which}* to see the list`
    let msgs = global.db.data.msgs
    if (!text in msgs) throw `'${text}' not registered in message list`
    delete msgs[text]
    m.reply(`Successfully delete message in message list by name '${text}'`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker', 'gif'].map(v => 'del' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^del(vn|msg|video|audio|img|stic?ker|gif)$/

module.exports = handler
