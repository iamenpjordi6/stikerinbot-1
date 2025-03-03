let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, usedPrefix }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Invalid Link'
    let res = await conn.acceptInvite(code)
    m.reply(`Successfully Joined the Group \nGroup JID: ${res.gid}`).then(() => {
        var jumlahHari = 86400000 * 0.5
        var now = new Date() * 1
        if (now < global.db.data.chats[res.gid].expired) global.db.data.chats[res.gid].expired += jumlahHari
        else global.db.data.chats[res.gid].expired = now + jumlahHari
    })
    await conn.sendButton(res.gid, `
*${conn.user.name}* is s Whatsapp BOT made with Nodejs based on Baileys, *${conn.user.name}* invited by @${m.sender.split`@`[0]}
    
Type *${usedPrefix}menu* to see a list of commands`.trim(), '© MilfBOT', 'Menu', `${usedPrefix}?`, { contextInfo: { mentionedJid: [m.sender] } })
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['']

handler.command = /^join$/i

handler.premium = false

module.exports = handler
