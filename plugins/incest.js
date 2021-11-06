let hmtai = require('hmtai')

let handler = async(m, { conn }) => {
  if (!db.data.settings.nsfw) throw "NSFW mode is *OFF*";
  let img = await hmtai.nsfw.incest ()
  await conn.sendFile(m.chat, img, '', '© MilfBOT', m)

}
handler.help = ['incest']
handler.tags = ['anime']

handler.command = /^(incest)$/i

module.exports = handler
