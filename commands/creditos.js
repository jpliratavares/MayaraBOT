const Discord = require('discord.js')
const fs = require("fs");
const db = require('quick.db')

exports.run = (client, message) => {
            if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)
  let info = JSON.parse(fs.readFileSync("./halloffame.json", "utf8"));
  let big = ''
  for(i = 0; i < info.bigfam.length; i++){
    big = big + `${info.bigfam[i]} \n`
  }
  let smol = ''
  for(i = 0; i < info.smolfam.length; i++){
    smol = smol + `${info.smolfam[i]} \n`
  }
  const embed = new Discord.MessageEmbed()
  .setColor(Math.floor(Math.random()*16777215))
  .setTitle("Mayara", '')
  .addField('Ela é a linda Mayara que traz diversão e moderação para o seu servidor:', big)
  .addField('Dica:', `Use o comando m/botinfo para ver os status da host da Mayara `)
  .setFooter(`2020 Mayara, by jpliratavares#4574.`);

  message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hof'],
  permLevel: 0
};

exports.help = {
  name: 'credits',
  description: 'Bot contributors!',
  usage: 'credits'
};
