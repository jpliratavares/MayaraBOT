const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
                if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://66.media.tumblr.com/e735b226744ea1cc0b81d3ad1486e6f4/tumblr_pxdsmxEKJ41se56q3o2_500.gifv'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar!');
}

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Kiss')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de beijar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('2020 EZCraft, jpliratavares#4574.')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
};

exports.help = {
    name: 'kiss'
}