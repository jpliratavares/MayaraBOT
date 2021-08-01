const Discord = require("discord.js")
const config = require("../config.json")
module.exports = async (client) => {
client.on('ready', () => {
	let activities = [
			`${config.prefix}help para ajuda`,
			`1º Lugar • ${config.prefix}suporte para entrar no meu servidor`,
			`Divertindo ${client.channels.cache.size} usuários`,
			`Caso meu prefixo não funcione, me mencione no chat.`

		],
		i = 0;
	setInterval(
		() =>
			client.user.setActivity(`${activities[i++ % activities.length]}`, {
				type: 'PLAYING'
			}),
		5000
	);
	client.user.setStatus('dnd').catch(console.log);
	console.log(
		`Estou pronta Meu SugarDaddy akakakakkakakak! Com ${client.users.cache.size} jogadores.`
	);
})};