const client = require('nekos.life');
const neko = new client();
const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
  if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)
  if(message.channel.nsfw === false) {
    message.channel.send(`${message.author}, você não pode pedir isso nesse canal, bobinho.`).then(msg => msg.delete({timeout: 1000 * 4}))
    message.delete().catch(O_o => {});
  } 
  if(message.channel.nsfw === true) {
      neko.nsfw.neko().then(neko => {
      const embed = new Discord.MessageEmbed()
      .setTitle(`🔞`)
      .setDescription(`Aproveite, ${message.author}`)
      .setColor("#882D61")
      .setImage(neko.url)
      .setFooter(`Sexy`)
      message.channel.send(embed)
      });
  };
}