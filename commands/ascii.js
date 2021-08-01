const figlet = require('figlet');
const db = require('quick.db')

module.exports = {

    name: "ascii",
    description: "Converte o texto para Ascii",

    async run (client, message, args){
        if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)
      
        if(!args[0]) return message.channel.send('Coloque o texto');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Alguma coisa deu errado.');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Coloque um texto inferior a 2000 caracteres')

            message.channel.send('```' + data + '```')
            message.delete().catch(O_o => {})
        })
    }
}