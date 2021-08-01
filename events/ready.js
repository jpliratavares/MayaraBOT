const Discord = require("discord.js")
const config = require("../config.json")
module.exports = async (client) => {
    console.log(" ")
    console.log(`${client.user.tag} está online ✅`);
    console.log(`Invite: https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`);
    console.log(`Bot feito pelo jplt#3301`);
    const hook = new Discord.WebhookClient('733061947981037609', 'tJZk90UYOPV063oIl5Vt_D_zUG-ARGs3qEbMG8sr6tnuusuusRv10B8KyYIvJ0BAgLvS');
    hook.send(`**The bot was activated in another guild!**`)
}

module.exports.event = {
    name: "ready"
}