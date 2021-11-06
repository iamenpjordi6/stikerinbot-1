let handler = async (m, { conn }) => {
  m.reply('Loading...')
  let res = `https://velgrynd.herokuapp.com/api/image/awoo`
  conn.sendFile(m.chat, res, 'milf.jpg', '© MilfBOT', m)
}
handler.help = ['awoo']
handler.tags = ['anime']
handler.command = /^(awoo)$/i
module.exports = handler
