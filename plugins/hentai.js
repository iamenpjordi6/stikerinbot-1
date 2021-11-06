let hmtai = require('hmtai')

let handler = async(m, { conn }) => {
  if (!db.data.settings.nsfw) throw "NSFW mode is *OFF*";
  let img = await hmtai.nsfw.hentai()
  await conn.sendFile(m.chat, img, '', '© MilfBOT', m)

}
handler.help = ['hentai']
handler.tags = ['anime']
handler.limit = true

handler.command = /^(hentai)$/i

module.exports = handler
