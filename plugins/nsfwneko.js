let hmtai = require('hmtai')

let handler = async(m, { conn }) => {
  if (!db.data.settings.nsfw) throw "NSFW mode is *OFF*";
  let img = await hmtai.nsfw.nsfwNeko()
  await conn.sendFile(m.chat, img, '', '© MilfBOT', m)

}
handler.help = ['nsfw neko']
handler.tags = ['anime']

handler.command = /^(nsfwneko)$/i

module.exports = handler
