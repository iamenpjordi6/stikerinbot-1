const free = 500
const prem = 5000
let handler = async (m, { conn, usedPrefix, isPrems }) => {
  if (db.data.users[m.sender].level < 1) return await conn.sendButton(m.chat, 'Raise your Level', '© MilfBOT', 'Level Up', `${usedPrefix}levelup`, m)
  let time = db.data.users[m.sender].lastclaim + 86400000
  if (new Date - db.data.users[m.sender].lastclaim < 86400000) throw `You have claimed daily claim today\nwait for ${msToTime(time - new Date())} again`
  db.data.users[m.sender].exp += isPrems ? prem * db.data.users[m.sender].level : free * db.data.users[m.sender].level
  m.reply(`+${isPrems ? prem * db.data.users[m.sender].level : free * db.data.users[m.sender].level} XP\n\nthe higher the level, the higher the XP earned`)
  db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + "hours" + minutes + "minutes"
}
