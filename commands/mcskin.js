const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    const player = args[0]
    const mcskin = new Discord.MessageEmbed()
        .setColor(`#ffb586`)
        .setTitle(`Aqui está a skin de ${player}!`)
        .setURL(`https://mc-heads.net/player/${player}/500`)
        .setImage(`https://mc-heads.net/player/${player}/500`)
    
    message.channel.send(mcskin)
}

exports.help = {
    name: "mcskin",
    aliases: ["skin de minecraft"]
}