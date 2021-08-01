const Discord = require('discord.js');
const db = require('quick.db')

module.exports = {
    config: {
        name: "ban",
        aliases: ['banir', 'dar-ban'],
        description: "Bana um membro",
        example: '/ban @User#1000',
        usage: '/ban <user>'
    },
    run: async(bot, message, args) => {
      let punicões = db.get(`punchannel_${message.guild.id}`)
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply('você precisa de permissão para isso!');
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply('eu preciso de permissão para isso!');

        let member = message.mentions.user.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.reply('Voce tem que mencionar um usuario do servidor, Se não mencionar nao vou conseguir banir o membro.');
        if (member === message.member) return message.reply('Mano azideia do cara, ta tentando ser banido? Pena que você não pode');

        let motivo = args.slice(1).join(" ");
        if (!motivo) return message.reply('Coloque um motivo para eu banir o Membro');

        let canal = message.guild.channels.cache.get(`${punicões}`);

        canal.send(`Membro banido: ${member}\nStaff: ${message.author}\nMotivo: ${motivo}`);
        member.ban();
    }
}