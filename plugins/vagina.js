let hmtai = require('hmtai')

let handler = async(m, { conn }) => {
  if (!db.data.settings.nsfw) throw "NSFW mode is *OFF*";
  let img = await hmtai.nsfw.vagina()
  await conn.sendFile(m.chat, img, '', '© MilfBOT', m)

}
handler.help = ['vagina']
handler.tags = ['anime']

handler.command = /^(vagina)$/i

module.exports = handler
