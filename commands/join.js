const db = require('quick.db')
exports.run = (client, message, args) => {
                if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)
    return new Promise((resolve, reject) => {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply('Não consegui **SAIR** ao seu canal de voz...');
        voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
    });
}