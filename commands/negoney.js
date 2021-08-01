const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
    if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)

var list = [
  'https://img.estadao.com.br/resources/jpg/5/5/1553173579355.jpg',
  'https://midias.agazeta.com.br/2020/03/13/o-mc-nego-ney-206621-article.jpg',
  'https://canalblitz.com.br/images/noticias/340/96286fc1c305b72ba49020668b7f3f75.jpg'
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Mizeravel vcc gosta do nego ney')
        .setColor('#000000')
        .setDescription(`${message.author} Vou ter que colocar a foto dele ja q sou escravo :(`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('2020 EZCraft, jpliratavares#4574.')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
};

exports.help = {
    name: 'negoney'
}