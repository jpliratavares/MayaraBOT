const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
                if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)
  if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply('você não tem a permissão de \`GERENCIAR CANAIS\` para usar esse comando.')

  const lock = new Discord.MessageEmbed()
   .setAuthor(message.author.username, message.author.displayAvatarURL())
   .setDescription('🔒 **| Tem certeza que deseja travar esse canal?**\n\nAtualmente somente para o cargo everyone.')
   .setColor('#261717')
   .setFooter('Reaja no emoji para travar ou aguarde 30 segundos.')
  message.channel.send(lock).then(msg => {
    msg.react('🔒')

    let filtro = (react, user) => react.emoji.name === "🔒" && user.id === message.author.id
    let coletor = msg.createReactionCollector(filtro, {max: 1, time: 30000})
    coletor.on('collect', a => {
      msg.delete()
      const travado = new Discord.MessageEmbed()
       .setAuthor(message.author.username, message.author.displayAvatarURL())
       .setDescription('🔒 | Canal travado com sucesso.')
       .setFooter("Use *unlock* para destravar")
       .setColor('#261717')
      message.channel.send(travado)

      message.channel.updateOverwrite(message.guild.roles.everyone, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
      })
    })
  })
}