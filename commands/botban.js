const db = require("quick.db")
const Discord = require('discord.js')
let punishz = new Discord.MessageEmbed()
const ids = [
    "752533666621816932",
    "",
    ""
]
module.exports.run = async (client, message, args, utils) => {
    if (!ids.includes(message.author.id)) return message.channel.send(`❌ ➤ ${message.author} Comando restrito para Moderadores da Lixeira Robótica!`)
    const user = message.mentions.users.first() || client.users.get(args[0]) 
    const reason = args.slice(1).join(" ")
    if (!args[0] || !user || user == null) {
        return message.channel.send(`❌ ➤ ${message.author} Você precisa dizer quem você quer banir de me utilizar.`)
    }
    if (user.id === "752533666621816932") return message.channel.send(`❌ ➤ ${message.author} Você não pode banir meu dono!`)
    if (!reason || !args[1]) return message.channel.send(`❌ ➤ ${message.author} Você precisa dizer qual é o motivo do bot-ban.`)
    const bban = db.get(`${user.id}.ban`)
    if (bban == null) db.get(`${user.id}.ban`, 0)
    if (bban == 1) return message.channel.send(`❌ ➤ ${message.author} Este usuário já está bot-banido!`)
    if (!bban == 1) {
        db.set(`${user.id}.ban`, 1)
        return message.channel.send(`✅ ➤ ${message.author} Este usuário foi bot-banido! (\`${user.username}\`)`)
    }
module.exports.help = {
    aliases: ['+bban'],
    name: '+botban',
    description: 'Bane um usuário de usar comandos.',
    usage: '++botban @user'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Moderação', /* You can make a category help command with this. */
    exclusiveTo: ''
}}