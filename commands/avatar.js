const Discord = require('discord.js')
const db = require('quick.db')
exports.run = (client, message, arg) => {
       if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)
          let user = message.mentions.users.first() || message.author || message.user.id,
        avatar = user.displayAvatarURL({dynamic: true, size: 512}),
        embed  = new Discord.MessageEmbed()
            .setDescription(`🖼 Avatar de ${user}\n**Clique [aqui](${avatar}) para fazer o download da imagem.**`)
            .setImage(avatar)
            .setColor("#a978ff")
            .setFooter(`Comando solicitado por: ${message.author.tag}`, message.author.avatarURL({dynamic: true, size: 512}))
            .setTimestamp()
    message.channel.send(embed);
  }


