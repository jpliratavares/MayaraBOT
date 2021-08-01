    const fetch = require('node-fetch');
    const db = require('quick.db')
    const Discord = require('discord.js');

    module.exports = {
        name: "covid",
        description: "Track a country or worldwide COVID-19 cases",

        async run (client, message, args){
                    if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)

            let countries = args.join(" ");

            
            const noArgs = new Discord.MessageEmbed()
            .setTitle('Missing arguments')
            .setColor(0xFF0000)
            .setDescription('Estão faltando alguns args (ex: m/covid all || m/covid Canada)')
            .setTimestamp()

            if(!args[0]) return message.channel.send(noArgs);

            if(args[0] === "all"){
                fetch(`https://covid19.mathdro.id/api`)
                .then(response => response.json())
                .then(data => {
                    let confirmed = data.confirmed.value.toLocaleString()
                    let recovered = data.recovered.value.toLocaleString()
                    let deaths = data.deaths.value.toLocaleString()

                    const embed = new Discord.MessageEmbed()
                    .setTitle(`Status da COVID-19 no mundo 🌎`)
                    .addField('Casos confirmados', confirmed)
                    .addField('Recuperados', recovered)
                    .addField('Mortes', deaths)

                    message.channel.send(embed)
                })
            } else {
                fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
                .then(response => response.json())
                .then(data => {
                    let confirmed = data.confirmed.value.toLocaleString()
                    let recovered = data.recovered.value.toLocaleString()
                    let deaths = data.deaths.value.toLocaleString()

                    const embed = new Discord.MessageEmbed()
                    .setTitle(`Status da COVID-19 no **${countries}**`)
                    .addField('Casos confirmados', confirmed)
                    .addField('Recuperados', recovered)
                    .addField('Mortes', deaths)

                    message.channel.send(embed)
                }).catch(e => {
                    return message.channel.send('País inválido')
                })
            }
        }
    }