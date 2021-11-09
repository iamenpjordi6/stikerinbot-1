const axios = require('axios')
let handler = async (m, { conn }) => {
   try{
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

    }
}

handler.help = ['news']
handler.tags = ['internet']
handler.command = /^(news)$/i

module.exports = handler
