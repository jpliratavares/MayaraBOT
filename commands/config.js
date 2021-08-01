const Discord = require('discord.js')
const db = require('quick.db')
const config = require('../config.json')

exports.run = async (client, message, args) => {
            if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)
  if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("este comando é apenas para quem tem permissão de \`ADMINISTRADOR\`")
  if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.reply('eu não tenho permissão de \`ADMINISTRADOR\`.')
  
  let prefix = db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix = config.prefix
  
  if(!args[0]) {
    const configembed = new Discord.MessageEmbed()
     .setTitle(`Config`)
     .setDescription(`**Este comando serve para te ajudar a me configurar em seu servidor.**

     ➥ **As configurações que tenho disponíveis no momento são:**
    
     ◆ ajuda
     ◆ antilink
     
     Para mais informações sobre a configuração, coloque \`${prefix}config <config>\`
     Este comando está em fase beta. Qualquer erro ou dúvida reportar ao suporte.`)
     .setColor("#C30000")
     .setFooter(`Mayara • Config`, `https://cdn.discordapp.com/app-icons/752536534800138370/095eb2d35b70719600c1b6e9864a74c5.png?size=64`)
     .setTimestamp();
    message.channel.send(configembed)
  }
{
  if(args[0] === "ajuda") {
    let helpembed = db.get(`off_${message.guild.id}`)

    if(helpembed === null) helpembed = "On"
    if(helpembed === "ajuda") helpembed = "Off"
    if(!args[1]) {
      const ajudaembed = new Discord.MessageEmbed()
       .setTitle("Config")
       .setDescription(`**__Ajuda__**

       ➥ **Ligue ou desligue a mensagem de ajuda ao digitar um comando errado ou inexistente**

       **Uso:**
       \`${prefix}config ajuda <on, off>\`
       
       **Status:**
       \`${helpembed}\``)
       .setColor("#752948")
       .setFooter(`Mayara • Config`, `https://i.imgur.com/0O6XHhN.png`)
       .setTimestamp();
      return message.channel.send(ajudaembed)
    }
    if(args[1] === "on") {
      db.delete(`off_${message.guild.id}`)
      message.channel.send(`A mensagem de ajuda com comandos errados foi **ativada**.`)
    }
    if(args[1] === "off") {
      db.set(`off_${message.guild.id}`, "ajuda")
      message.channel.send(`A mensagem de ajuda com comandos errados foi **desativada**.`)
    }
  }
  {
if(args[0] === "antilink") {
    let linkembedd = db.get(`offi_${message.guild.id}`)

    if(linkembedd === null) linkembedd = "On"
    if(linkembedd === "antilink") linkembedd = "Off"
    if(!args[1]) {
      const linkembed = new Discord.MessageEmbed()
       .setTitle("Config")
       .setDescription(`**__Anti-Link__**

       ➥ **Ligue ou desligue o sistema de antilink**

       **Uso:**
       \`${prefix}config antilink <on, off>\`
       
       **Status:**
       \`${linkembedd}\``)
       .setColor("#752948")
       .setFooter(`Mayara • Config`, `https://i.imgur.com/0O6XHhN.png`)
       .setTimestamp();
      return message.channel.send(linkembed)
    }
    if(args[1] === "on") {
      db.delete(`offi_${message.guild.id}`)
      message.channel.send(`O anti-link foi **ativada**.`)
    }
    if(args[1] === "off") {
      db.set(`offi_${message.guild.id}`, "antilink")
      message.channel.send(`O anti-link foi **desativado**.`)
        }
  	  }
    }
  }
}