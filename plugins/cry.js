let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn}) => {
  try {
  let res = await fetch('https://tobz-api.herokuapp.com/api/cry?apikey=Tobzzz17')
  let json = await res.json()
  let { 
result
} = json
let stiker = await sticker(null, result, 'Cry', '@SHIRAORI')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
  }
}
handler.help = ['cry']
handler.tags = ['anime']
handler.command = /^cry/i
handler.group = true

module.exports = handler
