const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
                if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)
  var list = [
    'https://media.tenor.com/images/2b56ba32044830e2fab5959e14d16e32/tenor.gif',
    'https://media.tenor.com/images/a12113877cf8e37bc03c29a8346b125a/tenor.gif',
    'https://media1.tenor.com/images/1069921ddcf38ff722125c8f65401c28/tenor.gif',
    'https://i.ibb.co/6XsjrH3/0-D7-B011-B-F46-D-4-FA4-829-E-C197-D9-C2-EFD4.gif',
    'https://acegif.com/wp-content/gif/anime-hug-83.gif',
    'https://acegif.com/wp-content/gif/anime-hug-63.gif',
    'https://acegif.com/wp-content/gif/anime-hug-19.gif'
]
  var rand = list[Math.floor(Math.random() * list.length)];
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  
  if (!user){
    return message.reply('**Mencione alguem valido**');
  }
   const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
       .setTitle('**_Abraço Deliciaaa <3_**')
      .setDescription(`**<@${message.author.id}> Abraçou o ${message.mentions.users.first()}**`)
      .setImage(rand);
 message.channel.send(embed);
};