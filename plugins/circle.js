const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No picture'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Meme ${mime} not supported`
  let img = await q.download()
  let url = await uploadImage(img)
  let wanted = `https://api.dhamzxploit.my.id/api/canvas/circle?url=${url}`
  let stiker = await sticker(null, wanted, 'circle', 'games-wabot')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply('Please Reply to a photo')
  }
}
handler.help = ['circle']
handler.tags = ['sticker']
handler.command = /^circle$/i

module.exports = handler
