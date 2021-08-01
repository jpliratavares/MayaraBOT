const Discord = require("discord.js");
const db = require('quick.db')

exports.run = async (client, message, args) => {
                if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)
message.delete();
const content = args.join(" ");
if (!args[0]) {
  return message.channel.send(`${message.author.username}, Requesitos YT:
  - [YT+]
• Requer 800 inscritos.
• Requer 7 minutos de vídeo no mínimo. 
• Recebe 250 de cash a cada 1 episódio.

Na descrição deve conter as seguintes informações!

• Nick:
• IP: 
• Discord:


- [YT]
• Requer 400 inscritos.
• Requer 5 minutos de vídeo no mínimo. 
• Recebe 150 de cash a cada 1 episódio. 

Na descrição deve conter as seguintes informações!

• Nick:
• IP: 
• Discord:


- [MiniYT]
• Requer 100 inscritos.
• Requer 5 minutos de vídeo no mínimo. 
• Recebe 75 de cash a cada 1 episódio. 

Na descrição deve conter as seguintes informações!

• Nick:
• IP: 
• Discord:
  `)
}
}