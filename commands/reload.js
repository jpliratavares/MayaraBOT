const config = require('../config.json');
const db = require('quick.db') 
exports.run = (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

  if(prefix === null) {
    prefix = config.prefix
  }
    if (!args || args.size < 1) return message.channel.send(`Especifique o comando a ser recarregado (**${prefix}reload** <comando>)`)
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.channel.send(`O comando **${args[0]}** foi recarregado!`)
};

exports.help = {
    name: 'reload',
    description: 'Reinicia um comando.',
    usage: 'reload <comando>'
};