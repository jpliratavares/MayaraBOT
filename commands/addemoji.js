const Discord = require('discord.js');
const { parse } = require('twemoji-parser');
const { MessageEmbed } = require('discord.js');
const Color = `RANDOM`;
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix = null) {
   prefix = config.prefix
  }
	if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
		return message.channel.send(
			`Para executar este comando você precisa possuir a permissão de ``Gerenciar Emojis`` `
		);
	}

	const emoji = args[0];
	if (!emoji)
		return message.channel.send(
			`<a:errado:754862431439814747> **|** ${
				message.author
			}, Você precisa me da o Emoji especifico. \`${prefix}addemoji :relaxed:\``
		);

	let customemoji = Discord.Util.parseEmoji(emoji);

	if (customemoji.id) {
		const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
			customemoji.animated ? 'gif' : 'png'
		}`;
		const name = args.slice(1).join(' ');
		message.guild.emojis.create(`${Link}`, `${name || `${customemoji.name}`}`);
		message.channel.send(`<a:giphy:766072987828617237>  | O usuário ${message.author} adicionou o emoji ${emoji} adicionado`)
		
	} else {
		let CheckEmoji = parse(emoji, { assetType: 'png' });
		if (!CheckEmoji[0])
			return message.channel.send(
				`<a:emoji_101:759279723884576788>  **|** ${
					message.author
				}, Não foi programada para adicionar link como emoji. Faça desta forma: \`${prefix}addemoji <emoji>\`.`
			);
		message.channel.send(
			`Você pode usar normal Emoji sem adicionar Em Servidor!`
		);
	}
};

exports.help = {
	name: 'addemoji',
	aliases: ['addemoji']
};
