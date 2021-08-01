function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
    
}
const ids = [
    "752533666621816932",
    "",
    ""
]
const db = require("quick.db")
const ms = require("parse-ms")
const { RichEmbed } = require("discord.js")
module.exports.run = async (client, message, args, utils) => {
    if (!ids.includes(message.author.id)) return message.channel.send(`❌ ➤ ${message.author} Comando restrito para Moderadores da Lixeira Robótica!`)
    const user = message.mentions.users.first() || client.users.get(args[0]) 
    if (!user) {
        return message.channel.send(`❌ ➤ ${message.author} Você precisa informar quem você quer dar bot-unban.`)
    }
    const bban = db.get(`${user.id}.ban`)
    if (bban == 0) return message.channel.send(`❌ ➤ ${message.author} Este usuário não está bot-banido.`)
    if (bban == 1) {
        db.set(`${user.id}.ban`, 0)
        return message.channel.send(`✅ ➤ ${message.author} Este usuário foi bot-desbanido! (\`${user.username}\`)`)
    }
   
}
module.exports.help = {
    aliases: ['+bunban'],
    name: '+botunban',
    description: 'Desbane um usuário de usar comandos.',
    usage: '++botunban @user'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Moderação', /* You can make a category help command with this. */
    exclusiveTo: ''
}