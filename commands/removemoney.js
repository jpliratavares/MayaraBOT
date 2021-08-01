const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
                if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)

  let prefix = db.get(`prefix_${message.guild.id}`)

  if(!message.content.startsWith(`${prefix}`))return;  
  let ownerID = '767132923287306281'
  if(message.author.id !== ownerID) return;

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.subtract(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:Check:618736570337591296> Removed ${args[1]} coins\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)

};


module.exports.help = {
  name:"remove",
  aliases: ["rm"]
}
