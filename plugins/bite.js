let Mimetype = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async(m, { conn }) => {

    if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
    if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
  let res = await fetch('https://api.waifu.pics/sfw/bite')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'

  conn.sendFile(m.chat,json.url,'h.gif',`@${m.sender.split('@')[0]} bite ${m.mentionedJid.map((user)=>(user === m.sender)? 'themselves ': `@${user.split('@')[0]}`).join(', ')}`,m,false,
  { mimetype: Mimetype.gif, contextInfo :{mentionedJid : [  ...m.mentionedJid,m.sender ] }})
  

}
handler.help = ['bite']
handler.tags = ['anime']
handler.command = /^bite$/i

module.exports = handler
