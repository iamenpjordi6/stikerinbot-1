const axios = require('axios')
let handler = async (m, { conn }) => {
   try{
<<<<<<< HEAD
      const news_api='https://newsapi.org/v2/top-headlines?country=us&apiKey=ba3e0f8350064654a0ee6a89005a0922'
    async function getNews(){
        const response = await fetch(news_api);
        const data = await response.json();
       
 
      conn.reply(m.chat,`Title: ${data.articles[1].title} , 
by: ${data.articles[1].author}

Description: ${data.articles[1].description}` .trim(),m)
    }catch(e){
throw 'location not found' 
console.log(e)
=======
>>>>>>> parent of eab4de1 (Update news.js)

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
