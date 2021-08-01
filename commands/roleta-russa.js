const Discord = require("discord.js");
const db = require('quick.db')
 
exports.run = (bot, message, args) => {
    if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)
 
    var random = Math.floor(Math.random() * (5 * 2) + 2);
    if (random === 3){
 
        let embed = new Discord.RichEmbed()
 
        .setDescription(`Rodou o cartucho e vc sobreviveu!`)
        .setColor('RANDOM')
        .setFooter(`A bala ficou no cartucho ${Math.round(random)}`)
 
        message.reply(embed)
    }
    else{
        let embed2 = new Discord.MessageEmbed()
 
        .setDescription(`Rodou o cartucho e morreu!`)
        .setColor('RANDOM')
        .setFooter(`A bala estava no cartucho ${Math.round(random)}`)
 
        message.reply(embed2)
    }
 
}
 
exports.help = {
    name: 'roleta'
}