let handler = async (m, { conn }) => {
  m.reply('Loading...')
  let res = `https://velgrynd.herokuapp.com/api/image/husbu`
  conn.sendFile(m.chat, res, 'milf.jpg', '© MilfBOT', m)
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i
module.exports = handler
