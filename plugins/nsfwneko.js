let handler = async (m, { conn }) => {
  if (!db.data.settings.nsfw) throw "NSFW mode is *OFF*";
  m.reply('Loading...')
  let res = `https://api.dhamzxploit.my.id/api/nsfw/neko`
  conn.sendFile(m.chat, res, 'neko.jpg', '© MilfBOT', m)
}
handler.help = ['nsfwneko']
handler.tags = ['anime']

handler.command = /^(nsfwneko)$/i

module.exports = handler
