  const Discord = require("discord.js");
  const db = require('quick.db')
  const moment = require("moment");
const os = require("os");
const cpuStat = require("cpu-stat");
moment.locale("pt-BR");
const { default_prefix } = require("../config.json")

module.exports.run = async (client, message, args) => {
            if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)
   if (os.platform() === "linux")
    var plata = "<:linux:625509707842584586> linux";

  let msg = message;
  msg.delete().catch(O_o => {});
  let { version } = require("discord.js");

  cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
      return console.log(err);
    }

    let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let second = Math.floor(totalSeconds % 60);

    const info = new Discord.MessageEmbed()
      .setTitle(
        `<a:bunnylove:861009801940303883> Olá, meu nome é Mayara!`,
        client.user.avatarURL({dynamic: true, size: 512})
      )
      .addField(
        " **Atualmente com**",
        `<:terminal:861009582134394920> » \`${client.users.cache.size}\` usuários\n <:cloud:751622139815395451> » \`${client.guilds.cache.size}\` servidores\n:satellite: » \`${client.channels.cache.size}\` canais\n:pushpin: » \`${client.emojis.cache.size}\` emojis`,
        true
      )

      .addField(
        " **<:clock:751622871159406632> » Uptime**",
        `Estou acordada à: \`${days} dias, ${hours} horas, ${minutes} minutos e ${second} segundos\``
      )
      .addField(
        `<:Linux:861009213337108540> **» Duvidas?**`,
        `Use \`m/help\` para saber meus comandos!`
      )
      .addField(
        ":link: **» Links**",
        `<:Discord_Bot_Dev:861009012086931467> » [Adicione-me](https://discord.com/oauth2/authorize?client_id=765581239792173086&scope=bot&permissions=0)\n:reminder_ribbon: » [Suporte](https://discord.gg/vwNrAPQH)\n`
      )
      .addField(
        "<a:star:751651910666158150>**» Desenvolvedores**",
        `\ - jplt#3301 \
        `
      )
      .setFooter(
        `Comando solicitado por: ${message.author.tag}`,
        message.author.avatarURL({dynamic: true, size: 512})
      )
      .setThumbnail(client.user.avatarURL({dynamic: true, size: 512}))
      .setColor("#a978ff")
      .setTimestamp();

    message.channel.send(message.author, info);
  });
};

module.exports.help = {
  name:"botinfo",
  aliases: ['bot']
};