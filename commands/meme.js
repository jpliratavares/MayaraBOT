const randomPuppy = require('random-puppy');
const Discord = require('discord.js');
const db = require('quick.db')

module.exports = {
    name: "meme",
    description: "Gives you a meme",
    async run (client, message, args) { 
      if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)
        const subReddits = ["dankmemes", "meme", "memes", "orochinho", "dndmemes", "SmashBrosUltimate", "PewdiepieSubmissions", "MemeEconomy", "PoliticalCompassMemes", "Animemes", "teenagers", "pics"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const img = await randomPuppy(random);
  
        const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Meme por: r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
  
        message.channel.send(memeEmbed);
    }
}