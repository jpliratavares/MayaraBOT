const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
const cpuStat = require("cpu-stat");
moment.locale("pt-BR");

module.exports.run = async (client, message, args) => {

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
        `<a:Heaarts:771950910321983518> Olá, meu nome é ${client.user}!`,
        client.user.avatarURL({dynamic: true, size: 512})
      )
      .addField(
        " **Atualmente com**",
        `<:mundo:749274306906685451> » \`${client.users.cache.size}\` usuários\n <:cloud:751622139815395451> » \`${client.guilds.cache.size}\` servidores\n:satellite: » \`${client.channels.cache.size}\` canais\n:pushpin: » \`${client.emojis.cache.size}\` emojis`,
        true
      )

      .addField(
        " **<:clock:751622871159406632> » Uptime**",
        `Estou acordado à: \`${days} dias, ${hours} horas, ${minutes} minutos e ${second} segundos\``
      )
      .addField(
        "<:info:748649730929590412> **» Duvidas?**",
        `Use \`z!help\` para saber meus comandos!`
      )
      .addField(
        ":link: **» Links**",
        `<:bot:748649730610954331> » [Adicione-me](https://discord.com/oauth2/authorize?client_id=773173964151062528&scope=bot&permissions=0)\n:reminder_ribbon: » [Suporte](https://discord.gg/efe82rF5jJ)\n`
      )
      .addField(
        "<a:star:751651910666158150>**» Desenvolvedores**",
        `\ - ! Saah ᵈᵒ ˢˡᵉⁱᵖʸˣ 👀👅 \
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