const { config } = require("process");
 module.exports = async(bot, message, args) => {
bot.on('raw', async dados => {

    if(dados.t !== "MESSAGE_REACTION_ADD") return
    if(dados.d.message_id != config.msgid) return

    let servidor = message.guild.id;
    let membro = messag.user.id

    let cargo = message.guild.roles.cache.find(roles => config.roleid);
  
    if(dados.t === "MESSAGE_REACTION_ADD") {

    if(dados.d.emoji.name === ":white_check_mark:") {
        if(membro.roles.cache.has(cargo)) return
            membro.roles.add(cargo)

        servidor.channels.cache.get(config.channelcaptcha).messages.fetch(dados.d.message_id).then(message => {
        message.reactions.cache.find(r => r.emoji.name === ":white_check_mark:").users.remove(dados.d.user_id)
            
            })
        }
    }
})};