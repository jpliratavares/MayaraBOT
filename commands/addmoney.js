const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {

    if (!client.config.admins.includes(message.author.id)) return; // return if author isn't bot owner
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("Especifique um usuário!");
    let amount = args[1];
    if (!amount || isNaN(amount)) return message.reply("Especifique um valor válido.");
    let data = client.eco.addMoney(user.id, parseInt(amount));
    const embed = new MessageEmbed()
        .setTitle(`Dinheiro adicionado!`)
        .addField(`Usuário`, `<@${data.user}>`)
        .addField(`Dinheiro Adicionado`, `${data.amount} 💸`)
        .addField(`Quantia total`, data.after)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "addmoney",
    aliases: ["addbal"],
    usage: `addmoney @user <amount>`
}