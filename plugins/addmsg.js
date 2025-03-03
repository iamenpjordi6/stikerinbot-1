let { WAMessageProto } = require('@adiwajshing/baileys')
let handler = async (m, { command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw 'Reply to a message!'
    if (!text) throw `Use *${usedPrefix}list${which}* to see the list`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `'${text}' registered in the message list`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    m.reply(`Successfully added message in message list as '${text}'
    
Access it with ${usedPrefix}get${which} ${text}`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker', 'gif'].map(v => 'add' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|stic?ker|gif)$/

module.exports = handler
