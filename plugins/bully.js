let Mimetype = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async(m, { conn }) => {

    if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
    if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
  let res = await fetch('https://velgrynd.herokuapp.com/api/image/bully')
  if (!res.ok) throw await res.text()
  if (!res) throw 'Error!'

  conn.sendFile(m.chat,res,'h.gif',`@${m.sender.split('@')[0]} bite ${m.mentionedJid.map((user)=>(user === m.sender)? 'themselves ': `@${user.split('@')[0]}`).join(', ')}`,m,false,
  { mimetype: Mimetype.gif, contextInfo :{mentionedJid : [  ...m.mentionedJid,m.sender ] }})
  

}
handler.help = ['anime']
handler.tags = ['bully']
handler.command = /^bully$/i

module.exports = handler
