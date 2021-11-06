const axios = require('axios')
let handler = async (m, { conn }) => {
   try{

        const response = axios.get(`https://api.zeks.me/api/foxnews?apikey=TJpDLutSDYzzlMF2OIa4zYeTfG4`)
        const res = await response
        const title = res.data["result"][0]["title"]["value"]
        const url = res.data["result"][0]["url"]["value"]
        const country = res.data["result"][0]["country"]["value"]
        const time = res.data["result"][0]["time"]["value"]
        const content = res.data["result"][0]["content"]["value"]
        
        conn.reply(m.chat,`
        🌸Title: ${title} , ${Country} , ${time}\n ${content}\nRead Full Article: ${url}
        `.trim(),m)
    }
}

handler.help = ['news']
handler.tags = ['internet']
handler.command = /^(news)$/i

module.exports = handler
