const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if (message.author.id !== '244421246140416001' && message.author.id !== '478698901939945482')message.reply(" | você não possui permissão para usar esse comando.");
message.delete()
 
let mensagem = args.join(" ")
let servidores = client.guilds.size
let usuarios = client.users.size
 
client.users.forEach((f) => {f.send(mensagem)},
message.channel.send(`**${message.author} sua mensagem está sendo enviada para __${usuarios}__ usuários em __${client.users.cache.size}__ servidores.**`)
)}

exports.help = {
    name: 'geral'
}



