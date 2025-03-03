let fetch = require("node-fetch");
let handler = async (m, { conn, args }) => {
  let res = await fetch(
    global.API("https://coffee.alexflipnote.dev/", "/random.json")
  );
  if (!res.ok) throw await `${res.status} ${res.statusText}`;
  let json = await res.json();
  if (json.file) conn.sendFile(m.chat, json.file, "kopi.png", "Coffee", m);
  else throw json;
};
handler.help = ["coffee"];
handler.tags = ["internet"];

handler.command = /^coffee$/i;

module.exports = handler;
