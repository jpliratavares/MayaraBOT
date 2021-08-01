  const db = require('quick.db')
  module.exports.run = async (client, message, args) => {
      const m = await message.channel.send('ping?');
      if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)
    
      m.edit(`🏓 **| Pong!**\nLatência do Server: **${m.createdTimestamp -
          message.createdTimestamp}ms.**\nLatência da API: **${Math.round(
          client.ws.ping
        )}ms**`
      );
    };

  exports.help = {
      name: 'ping'
  }