const axios = require('axios')
let handler = async (m, { conn }) => {
   try{

        const response = axios.get(`https://api.zeks.me/api/foxnews?apikey=TJpDLutSDYzzlMF2OIa4zYeTfG4`)
        const res = await response
        const title = res.data.title
        const url = res.data.url
        const country = res.data.country
        const time = res.data.time
        const content = res.data.content
        
        conn.reply(m.chat,`
        🌸Title: ${title} , ${Country} , ${time}\n ${content}\nRead Full Article: ${url}
        `.trim(),m)
    }
}

handler.help = ['news']
handler.tags = ['internet']
handler.command = /^(news)$/i

module.exports = handler
