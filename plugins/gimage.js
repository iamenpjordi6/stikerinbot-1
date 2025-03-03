let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let fetch = require('node-fetch')

let handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) throw `uhm.. What are you looking for?\n\nExample:\n${usedPrefix + command} Dani Daniels`
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw '404 Not Found'
  conn.sendFile(m.chat, url, 'gimage', '', m, 0, { thumbnail: await (await fetch(url)).buffer() })
}
handler.help = ['gimage <search>', 'image <search>']
handler.tags = ['internet']
handler.command = /^(g?image)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
