const math = require('mathjs');
const db = require('quick.db')
const Discord = require('discord.js');

module.exports = {
    name: "calculate",
    description: "Get the answer to a math problem",


    async run (client, message, args){
                if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)

        if(!args[0]) return message.channel.send('Me diga a questão matemática');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Por favor me diga uma questão **valida**')
        }

        const embed = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle('Calculadora')
        .addField('Questão', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Resposta', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }
}