const fs = require('fs')
const discord = require('discord.js')

module.exports = async (client, message) => {

fs.readdir("../commands/", (error, files) => {
    if (error) throw error
    files.forEach(file => {
        if (!file.endsWith(".js")) return
        if (file.startsWith("_")) return
        let props = require(`../commands/${file}`)
        let commandName = file.split(".")[0]
        client.commands.set(commandName, props)
        if (props.aliases != null) {
            for (let i = 0; i < props.aliases.length; i++) {
                client.commands.set(props.aliases[i], props)
            }
        }
      console.log(`[COMMAND LOADED] >> ${commandName}... ${props.aliases != null ? "Alaises: " + props.aliases.join(", ") : ""}`)
      	let prefix = db.get(`prefix_${message.guild.id}`);
	if (prefix === null) {
		prefix = config.prefix;
	}
		console.error('Erro:' + error);
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
    })
})}