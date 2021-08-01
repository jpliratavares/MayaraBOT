const Discord = require("discord.js");
const c = require("../config.json");
const ping = require("minecraft-server-util");

exports.run = async (bot, message, args, error, reponse, host) => {
    if(!args[0]) return message.channel.send('Você deve digitar um ip do servidor minecraft')


        let Embed = new Discord.MessageEmbed()
        .setColor(`#ffb586`)
        .setTitle('<:mapa:746183950741012582> Status Do Server')
        .addField('IP', reponse.host)
        .addField('Version do Server', reponse.version)
        .addField('Jogadores Online', reponse.onlinePlayers)
        .addField('Maximo de Jogadores', reponse.maxPlayers)
        
        message.channel.send(Embed)
    }

exports.help = {
    name: "mcserver",
    aliases: ["mcservers"]
}