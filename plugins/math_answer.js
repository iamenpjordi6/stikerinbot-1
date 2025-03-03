let handler = m => m
handler.before = async function (m) {
  if (!/^-?[0-9]+(\.[0-9]+)?$/.test(m.text)) return !0
  let id = m.chat
  // if (!m.quoted || m.quoted.sender != this.user.jid || !/^Berapa hasil dari/i.test(m.quoted.text)) return !0
  this.math = this.math ? this.math : {}
  try {
    if (!(id in this.math) && /^What is the result of/i.test(m.quoted.text)) return m.reply('The matter has ended')
    // if (m.quoted.id == this.math[id][0].id) {
    let math = JSON.parse(JSON.stringify(this.math[id][1]))
    if (m.text == math.result) {
      global.db.data.users[m.sender].exp += math.bonus
      clearTimeout(this.math[id][3])
      delete this.math[id]
      await this.sendButton(m.chat, `✅ *Correct!* +${math.bonus} XP`, '© MilfBOT', `${math.mode.toUpperCase()}`, `.math ${math.mode}`, m)
    } else {
      if (--this.math[id][2] == 0) {
        clearTimeout(this.math[id][3])
        delete this.math[id]
        await this.sendButton(m.chat, `*Oportunity is up!*\nAnswer is: *${math.result}*`, '© MilfBOT', `${math.mode.toUpperCase()}`, `.math ${math.mode}`)
      } else m.reply(`❎ *Wrong Answer!*\nThere is still ${this.math[id][2]} chance`)
    }
  } catch (e) { return }
  // }
  return !0
}

module.exports = handler
