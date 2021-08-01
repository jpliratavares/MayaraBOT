const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async(bot, message, args, length) => {
                if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)
        let money = db.get(`money_${message.guild.id}`, { sort: '.data' })

        let content = "";

        for (let i = 0; i < money.length; i++){
            let user = client.users.cache.get(money[i].ID.split('_')[2]).username

            content += `${i+1}. ${user} - ${money[i].data} \n`;

            const embed = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name}'s Leaderboard`)
            .setDescription(`${content}`)
            .setColor("RANDOM")
            .setTimestamp()

            message.channel.send(embed);
        }
    }
  
