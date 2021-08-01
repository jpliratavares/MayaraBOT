const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, utils) => {
  let prefix = db.get(`prefix_${message.guild.id}`)
  if(!message.content.startsWith(`${prefix}`))return;  

  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**Saldo de ${user}**\n\nBanco: ${bal}\nBanco: ${bank}`);
  message.channel.send(moneyEmbed)
};

module.exports.help = {
  name:"balance",
  aliases: ["bal"]
}