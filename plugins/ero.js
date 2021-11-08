let hmtai = require('hmtai')

let handler = async(m, { conn }) => {
  if (!db.data.settings.nsfw) throw "NSFW mode is *OFF*";
  let img = await hmtai.nsfw.ero()
  await conn.sendFile(m.chat, img, '', '© MilfBOT', m)

}
handler.help = ['ero']
handler.tags = ['anime']
handler.group = true

handler.command = /^(ero)$/i

module.exports = handler
