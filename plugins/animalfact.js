let fetch = require("node-fetch");

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    throw `
*${usedPrefix}${command} <animal name>*
Example:
*${usedPrefix}${command} <dog>*\n
┌〔 Options 〕
├ dog
├ cat
├ panda
├ fox
├ red_panda
├ koala
├ birb
├ raccoon
├ kangaroo
└────
`.trim();
  let res = await fetch(
    API("https://some-random-api.ml", "/animal/" + text, {})
  );
  if (!res.ok) throw `${res.status} ${res.statusText}`;
  let json = await res.json();
  if (json.image) await conn.sendFile(m.chat, json.image, "", `${json.fact}\n\n~fatur`, m);
  else throw json;
};
handler.help = ["animal"].map((v) => v + " <hewan>");
handler.tags = ["internet"];
handler.command = /^(animal|animalfact)$/i;

module.exports = handler;
