const Discord = require('discord.js');
const db = require('quick.db')
const config = require('../config.json')

exports.run = async (client, message, args) => {
                if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)
  let prefix = db.get(`prefix_${message.guild.id}`)

  const sayMessage = args.join(' ');

  if(prefix === null) {
    prefix = config.prefix
  }

  const embed = new Discord.MessageEmbed()
  .setTitle(`${message.author.username}`)
  .setImage(`https://i.imgur.com/0O6XHhN.png`)
  .setColor("#882D61")
  .setDescription(`*Como posso te ajudar?*
  
  🔧 **__COMANDOS__**

  1️⃣ **| DIVERSOS 🕹️**
  2️⃣ **| MODERAÇÃO 🤖**
  3️⃣ **| INFORMAÇÕES 📌**

  *Meu prefixo atual:*
  ➥ \`${prefix}\`

  **Para dúvidas, utilize \`${prefix}ticket\` para abrir um chat privado.**`)
      .setFooter(`Mayara • Help 1/4` , `https://i.imgur.com/0O6XHhN.png`)
  message.channel.send(embed).then(msg => {
      msg.react(`⬅️`)
      msg.react(`1️⃣`)
      msg.react(`2️⃣`)
      msg.react(`3️⃣`)

  let filtro = (react, user) => react.emoji.name === "1️⃣" && user.id === message.author.id
  let acoletor = msg.createReactionCollector(filtro)
  acoletor.on('collect', am => {
    const embed2 = new Discord.MessageEmbed()
    .setColor("#882D61")
    .setTitle(`${message.author.tag}`)
    .setDescription(`__**DIVERSOS 🕹️**__
      
  <a:giphy:861007040448954408>  ✅ **${prefix}coinflip** <cara ou coroa>
  \`Jogue uma moeda para cima e tente acertar qual lado irá cair virado pra cima.\`
  <a:giphy:861007040448954408>  ✅ **${prefix}kiss** <menção>
  \`Para beijar um usuário\`
  <a:giphy:861007040448954408>  ✅ **${prefix}hug** <menção>
  \`Para abraçar alguém\`
  <a:giphy:861007040448954408>  ✅ **${prefix}ship** <menção> <menção>
  \`Para abraçar alguém\`
  <a:giphy:861007040448954408>  ✅ **${prefix}lolis**
  \`Ganha uma foto de uma loli\`
  <a:giphy:861007040448954408>  ✅ **${prefix}8ball** <pergunta>
  \`Faça uma pergunta e eu respondo\`
  <a:giphy:861007040448954408>  ✅ **${prefix}ascii** <texto>
  \`Converte o texto para Ascii\`
   <a:giphy:861007040448954408>  ✅ **${prefix}servidores** 
   \`Veja em que servidores a Mayara está\`
      
    **Para voltar, reaja com ⬅️**`)
    .setFooter(`Mayara • Help 2/4` , `https://i.imgur.com/0O6XHhN.png`)
    msg.edit(embed2)
    am.users.remove(message.author.id)
  })

  let acfiltro = (react, user) => react.emoji.name === "2️⃣" && user.id === message.author.id
  let accoletor = msg.createReactionCollector(acfiltro)
  accoletor.on('collect', ac => {
    const embed3 = new Discord.MessageEmbed()
    .setColor("#882D61")
    .setTitle(`${message.author.tag}`)
    .setDescription(`__**MODERAÇÃO 🤖**__
      
  <a:giphy:861007040448954408>  ✅ **${prefix}clear** <1~99>
  \`Para limpar o chat.\`
  <a:giphy:861007040448954408>  ✅ **${prefix}say** <frase>
  \`Para fazer eu mandar a mensagem.\`
  <a:giphy:861007040448954408>  ✅ **${prefix}ban** <menção> <motivo>
  \`Para banir alguém.\`
   <a:giphy:861007040448954408>  ✅ **${prefix}addemoji** <emoji>
  \`Para adocionar um emoji.\`
  <a:giphy:861007040448954408>  ✅ **${prefix}kick** <menção> <motivo>
  \`Para expulsar alguém.\`
  <a:giphy:861007040448954408>  ✅ **${prefix}slowmode** <segundos>
  \`Para definir quantos segundos de modo lento no canal digitado.\`
  <a:giphy:861007040448954408>  ✅ **${prefix}lock**
  \`Para travar as mensagens do canal.\`
  <a:giphy:861007040448954408>  ✅ **${prefix}unlock**
  \`Para destravar as mensagens do canal.\`
  <a:giphy:861007040448954408>  ✅ **${prefix}mute**
  \`Para silenciar um usuário.\`
  <a:giphy:861007040448954408>  ✅ **${prefix}setprefix** <prefixo>
  \`Para definir meu prefixo.\`
  <a:giphy:861007040448954408>  ✅ **${prefix}tclose**
  \`Para deletar um canal de ticket.\`
  <a:giphy:861007040448954408>  ✅ **${prefix}sorteio**
  \`Inicie um sorteio simples.\`
      
    **Para voltar, reaja com ⬅️**`)
    .setFooter(`Mayara • Help 3/4` , `https://i.imgur.com/0O6XHhN.png`)
    msg.edit(embed3)
    ac.users.remove(message.author.id)
  })

  let abcfiltro = (react, user) => react.emoji.name === "3️⃣" && user.id === message.author.id
  let abccoletor = msg.createReactionCollector(abcfiltro)
  abccoletor.on('collect', abc => {
    const embed4 = new Discord.MessageEmbed()
    .setColor("#882D61")
    .setTitle(`${message.author.tag}`)
    .setDescription(`__**INFORMAÇÕES**__ 📌
      
  <a:giphy:861007040448954408>  ✅ **${prefix}uptime**
  \`Para saber quanto tempo estou ligada.\`
  <a:giphy:861007040448954408>  ✅ **${prefix}ping**
  \`Para ter informações de latência.\`
  <a:giphy:861007040448954408>  ✅ **${prefix}botinfo**
  \`Para ter mais informações sobre mim.\`
  <a:giphy:861007040448954408>  ✅ **${prefix}serverinfo**
  \`Para ter informações sobre o servidor.\`
    <a:giphy:861007040448954408>  ✅ **${prefix}userinfo**
  \`Para ter informações sobre o servidor.\`
  <a:giphy:861007040448954408>  ✅ **${prefix}avatar** <menção>
  \`Envio a foto do seu perfil.\`
  <a:giphy:861007040448954408>  ✅ **${prefix}covid** <país>
  \`Informações sobre a situação do corona no país.\`
  <a:giphy:861007040448954408>  ✅ **${prefix}suporte**
  \`Obter o link de convite do meu servidor.\`
  <a:giphy:861007040448954408>  ✅ **${prefix}invite**
  \`Obter o link para me convidar ao seu servidor.\`

      
    **Para voltar, reaja com ⬅️**`)
    .setFooter(`Mayara • Help 4/4` , `https://i.imgur.com/0O6XHhN.png`)
    msg.edit(embed4)
    abc.users.remove(message.author.id)
  })

    let fbac = (react, user) => react.emoji.name === "⬅️" && user.id === message.author.id;
    let bcoletor = msg.createReactionCollector(fbac)
    bcoletor.on('collect', back => {
      msg.edit(embed)
      back.users.remove(message.author.id)
    })
  });
};