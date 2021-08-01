const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
                if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)
    if(args && args.length > 1){
        message.channel.send(`${message.author.username} has paid their respect for **${args.join(' ')}** <a:cristal:725322052315381831>`)
    }else{
        message.channel.send(`${message.author.username} has paid their respect <a:cristal:725322052315381831>`)
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["eff"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'f',
    description: 'Press F to pay Respekt',
    usage: 'f'
  };