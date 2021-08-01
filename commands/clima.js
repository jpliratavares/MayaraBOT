const weather = require('weather-js');
const db = require('quick.db')
const Discord = require('discord.js');

module.exports = {
    name: "weather",
    description: "Checks a weather forecast",

    async run (client, message, args){
                if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)

    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Por Favor especifique uma localização')

        if(result === undefined || result.length === 0) return message.channel.send('**Localização Invalida**');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Clima por ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('Timezone', `UTC${location.timezone}`, true)
        .addField('Tipo de medida', 'Celsius', true)
        .addField('Temperatura', `${current.temperature}°`, true)
        .addField('Velocidade do Vento', current.winddisplay, true)
        .addField('Impressão de Temperatura', `${current.feelslike}°`, true)
        .addField('Umidade', `${current.humidity}%`, true)


        message.channel.send(weatherinfo)
        })        
    }
}