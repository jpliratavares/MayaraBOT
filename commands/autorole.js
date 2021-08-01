const fs = require("fs");
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const db = require('quick.db')


exports.run = async(client, message, args) => {

 if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)

  
 

if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("you can't use this command");
	let autorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
	if (!args[0]) {
		autorole[message.guild.id] = {
			role: 0
		};
		fs.writeFile("./autorole.json", JSON.stringify(autorole), (err) => {
			if (err) console.log(err);
		});
		message.channel.send(`**${message.author.username}** autorole has been turned off!`);
	}
	if (args[0]) { 
		let roles = args.join(" ");
		let role = message.guild.roles.cache.find("name", roles);
		autorole[message.guild.id] = {
			role: role.id 
		};
		fs.writeFile("./autorole.json", JSON.stringify(autorole), (err) => {
			if (err) console.log(err)
		});
		message.channel.send(`**${message.author.username}** autorole set to**${role.name}**`);
	}
}

