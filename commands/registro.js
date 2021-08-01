const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async(client, message, args) => {
  if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)
  let guild = client.guilds.cache.get(`710981122724462666`);

  let membro = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  let emoji = message.guild.emojis.cache.find(emoji => emoji.name === "no")

  var roleh = message.guild.roles.cache.find(r => r.name === '♂ Homem ☬࿐');
  var rolem = message.guild.roles.cache.find(r => r.name === '♀ Mulher ☬࿐');
  var rolenb = message.guild.roles.cache.find(r => r.name === '🕵️ Não Binário ☬࿐');
  var roleht = message.guild.roles.cache.find(r => r.name === '💪Hétero ࿐');
  var rolelgbt = message.guild.roles.cache.find(r => r.name === '🌈 LGBT ࿐');
  var rolema18 = message.guild.roles.cache.find(r => r.name === '⛓️ +18 ࿐');
  var roleme18 = message.guild.roles.cache.find(r => r.name === '🍼 -18 ࿐');
  var roles = message.guild.roles.cache.find(r => r.name === '🥳 Solteiro(a) ࿐');
  var rolen = message.guild.roles.cache.find(r => r.name === '❤️ Namorando ࿐');
  var rolee = message.guild.roles.cache.find(r => r.name === '💍 Casado(a) ࿐');

  var roleregistro = message.guild.roles.cache.find(r => r.id === '744805356907003945');

  if(message.guild !== guild) return;

  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.reply(`te falta a permissão \`ADMINISTRADOR\` `)

  if(!args[0]) return message.reply(`mencione o usuário que deseja registrar`)

  var role = message.guild.roles.cache.find(r => r.id === '744682667563286588');

  message.channel.send(`${membro.user}, você está sendo registrado por: ${message.author}`).then(msgm => msgm.delete({timeout: 5000}))
  const registro = new Discord.MessageEmbed()
   .setAuthor(`Registrando: ${membro.user.username}` , membro.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
   .setTitle(`**__REGISTRO__**`)
   .setColor(`#882D61`)
   .setDescription(`Reaja de acordo com as informações dadas:
   
   👨 Homem
   👩 Mulher
   🖇️ Não binário

   E vamos de registro!!`)
   .setFooter(`Mayara • Registro 1/5`, `https://i.imgur.com/xAbKWT1.png`)
   .setTimestamp();
   message.delete()
   message.channel.send(registro).then(msg => {
     msg.react(`👨`)
     msg.react(`👩`)
     msg.react(`🖇️`)

    let filtroa = (react, user) => react.emoji.name === "👨" && user.id === message.author.id
    let acoletor = msg.createReactionCollector(filtroa)
    acoletor.on('collect', am => { 
      const registro2 = new Discord.MessageEmbed()
       .setAuthor(`Registrando: ${membro.user.username}` , membro.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
       .setTitle(`**__REGISTRO__**`)
       .setColor(`#882D61`)
       .setDescription(`Reaja de acordo com as informações dadas:
   
       💪 Hétero
       🌈 LGBT

       E lá vamos nós!`)
       .setFooter(`Mayara • Registro 2/5`, `https://i.imgur.com/xAbKWT1.png`)
       .setTimestamp();
      msg.edit(registro2)
      msg.react(`💪`)
      msg.react(`🌈`)
      membro.roles.add(roleh)
    })
    let filtrob = (react, user) => react.emoji.name === "👩" && user.id === message.author.id
    let bcoletor = msg.createReactionCollector(filtrob)
    bcoletor.on('collect', bm => {
      const registro2a = new Discord.MessageEmbed()
       .setAuthor(`Registrando: ${membro.user.username}` , membro.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
       .setTitle(`**__REGISTRO__**`)
       .setColor(`#882D61`)
       .setDescription(`Reaja de acordo com as informações dadas:
   
       💪 Hétero
       🌈 LGBT

       Quase lá`)
       .setFooter(`Mayara • Registro 2/5`, `https://i.imgur.com/xAbKWT1.png`)
       .setTimestamp();
      msg.edit(registro2a)
      msg.react(`💪`)
      msg.react(`🌈`)
      membro.roles.add(rolem)
    })
    let filtroc = (react, user) => react.emoji.name === "🖇️" && user.id === message.author.id
    let ccoletor = msg.createReactionCollector(filtroc)
    ccoletor.on('collect', cm => {
      const registro2b = new Discord.MessageEmbed()
       .setAuthor(`Registrando: ${membro.user.username}` , membro.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
       .setTitle(`**__REGISTRO__**`)
       .setColor(`#882D61`)
       .setDescription(`Reaja de acordo com as informações dadas:
   
       💪 Hétero
       🌈 LGBT

       Quase lá`)
       .setFooter(`Mayara • Registro 2/5`, `https://i.imgur.com/xAbKWT1.png`)
       .setTimestamp();
      msg.edit(registro2b) 
      membro.roles.add(rolenb)
    })
    let filtrod = (react, user) => react.emoji.name === "💪" && user.id === message.author.id
    let dcoletor = msg.createReactionCollector(filtrod)
    dcoletor.on('collect', dm => {
      const registro3 = new Discord.MessageEmbed()
       .setAuthor(`Registrando: ${membro.user.username}` , membro.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
       .setTitle(`**__REGISTRO__**`)
       .setColor(`#882D61`)
       .setDescription(`Reaja de acordo com as informações dadas:
   
       🔎 +18
       👶 -18

       Ta indo em`)
       .setFooter(`Mayara • Registro 3/5`, `https://i.imgur.com/xAbKWT1.png`)
       .setTimestamp();
      msg.edit(registro3)
      msg.react(`🔎`)
      msg.react(`👶`)
      membro.roles.add(roleht)
    })
    let filtroe = (react, user) => react.emoji.name === "🌈" && user.id === message.author.id
    let ecoletor = msg.createReactionCollector(filtroe)
    ecoletor.on('collect', em => {
      const registro3a = new Discord.MessageEmbed()
       .setAuthor(`Registrando: ${membro.user.username}` , membro.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
       .setTitle(`**__REGISTRO__**`)
       .setColor(`#882D61`)
       .setDescription(`Reaja de acordo com as informações dadas:
   
       🔎 +18
       👶 -18

       Ta indo em`)
       .setFooter(`Mayara • Registro 3/5`, `https://i.imgur.com/xAbKWT1.png`)
       .setTimestamp();
      msg.edit(registro3a)
      msg.react(`🔎`)
      msg.react(`👶`)
      membro.roles.add(rolelgbt)
    })
    let filtrof = (react, user) => react.emoji.name === "🔎" && user.id === message.author.id
    let fcoletor = msg.createReactionCollector(filtrof)
    fcoletor.on('collect', fm => {
      const registro4 = new Discord.MessageEmbed()
       .setAuthor(`Registrando: ${membro.user.username}` , membro.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
       .setTitle(`**__REGISTRO__**`)
       .setColor(`#882D61`)
       .setDescription(`Reaja de acordo com as informações dadas:
   
       😎 Solteiro(a)
       😍 Namorando
       💍 Casado(a)

       Falta pouco!`)
       .setFooter(`Mayara • Registro 4/5`, `https://i.imgur.com/xAbKWT1.png`)
       .setTimestamp();
      msg.edit(registro4)
      msg.react(`😎`)
      msg.react(`😍`)
      msg.react(`💍`)
      membro.roles.add(rolema18)
    })
    let filtrog = (react, user) => react.emoji.name === "👶" && user.id === message.author.id
    let gcoletor = msg.createReactionCollector(filtrog)
    gcoletor.on('collect', gm => {
      const registro4a = new Discord.MessageEmbed()
       .setAuthor(`Registrando: ${membro.user.username}` , membro.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
       .setTitle(`**__REGISTRO__**`)
       .setColor(`#882D61`)
       .setDescription(`Reaja de acordo com as informações dadas:
   
       😎 Solteiro(a)
       😍 Namorando
       💍 Casado(a)

       Falta pouco!`)
       .setFooter(`Mayara • Registro 4/5`, `https://imgur.com/lm3fAdo.png`)
       .setTimestamp();
      msg.edit(registro4a)
      msg.react(`😎`)
      msg.react(`😍`)
      msg.react(`💍`)
      membro.roles.add(roleme18)
    })
    let filtroh = (react, user) => react.emoji.name === "😎" && user.id === message.author.id
    let hcoletor = msg.createReactionCollector(filtroh)
    hcoletor.on('collect', hm => {
      const registro5 = new Discord.MessageEmbed()
       .setAuthor(`Registrando: ${membro.user.username}` , membro.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
       .setTitle(`**__REGISTRO__**`)
       .setColor(`#882D61`)
       .setDescription(`Para completar o registro, reaja com ${emoji}!`)
       .setFooter(`Mayara • Registro 5/5`, `https://i.imgur.com/xAbKWT1.png`)
       .setTimestamp();
      msg.edit(registro5)
      msg.react(`no:745474695129858209`)
      membro.roles.add(roles)
    })
    let filtroi = (react, user) => react.emoji.name === "😍" && user.id === message.author.id
    let icoletor = msg.createReactionCollector(filtroi)
    icoletor.on('collect', im => {
      const registro5a = new Discord.MessageEmbed()
       .setAuthor(`Registrando: ${membro.user.username}` , membro.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
       .setTitle(`**__REGISTRO__**`)
       .setColor(`#882D61`)
       .setDescription(`Para completar o registro, reaja com ${emoji}!`)
       .setFooter(`Mayara • Registro 5/5`, `https://i.imgur.com/xAbKWT1.png`)
       .setTimestamp();
      msg.edit(registro5a)
      msg.react(`no:745474695129858209`)
      membro.roles.add(rolen)
    })
    let filtroj = (react, user) => react.emoji.name === "💍" && user.id === message.author.id
    let jcoletor = msg.createReactionCollector(filtroj)
    jcoletor.on('collect', jm => {
      const registro5b = new Discord.MessageEmbed()
       .setAuthor(`Registrando: ${membro.user.username}` , membro.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
       .setTitle(`**__REGISTRO__**`)
       .setColor(`#882D61`)
       .setDescription(`Para completar o registro, reaja com ${emoji}!`)
       .setFooter(`Mayara • Registro 5/5`, `https://i.imgur.com/xAbKWT1.png`)
       .setTimestamp();
      msg.edit(registro5b)
      msg.react(`no:745474695129858209`)
      membro.roles.add(rolee)
    })
    let filtrok = (react, user) => react.emoji.id === "745474695129858209" && user.id === message.author.id
    let kcoletor = msg.createReactionCollector(filtrok)
    kcoletor.on('collect', km => {
      msg.delete()
      membro.roles.remove(role)
      message.channel.send(`**Registro efetuado com sucesso!**`).then(mesg => mesg.delete({timeout: 1000 * 4}))
    })
  })
}