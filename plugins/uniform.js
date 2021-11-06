let hmtai = require('hmtai')

let handler = async(m, { conn }) => {
  if (!db.data.settings.nsfw) throw "NSFW mode is *OFF*";
  let img = await hmtai.nsfw.uniform()
  await conn.sendFile(m.chat, img, '', '© MilfBOT', m)

}
handler.help = ['uniform']
handler.tags = ['anime']

handler.command = /^(uniform)$/i

module.exports = handler
