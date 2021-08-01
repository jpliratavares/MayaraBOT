const Discord = require("discord.js");
const db = require('quick.db')

exports.run = async (client, message, args) => {

  if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)

if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Você não tem permissao.`)

message.delete();
const content = args.join(" ");

if (!args[0]) {
    return message.channel.send(`${message.author.username}, escreva o anuncio após o comando`)
} else if (content.length > 1100) {
    return message.channel.send(`${message.author.username}, envie um anuncio de até 1100 caracteres!`);
} else {
    var canal = message.guild.channels.cache.find(ch => ch.id === "739845998511259688");
    const msg = await canal.send(
        new Discord.MessageEmbed()
        .setColor("#FA8072")
        .addField("@everyone")
        .addField("Aviso", content)
        .setTimestamp())
        message.channel.send();
     message.channel.send(`${message.author} a mensagem foi enviada com sucesso!`)

    const emojis = ["740220950511091782", "725322052315381831"]
    
    for (const i in emojis) {
        await msg.react(emojis[i])
    }
}
}

exports.help = {
    name: 'anuncio'
}