var commandLastPost = {}

module.exports = async (client, message) => {

    
    var config = client.generalConfig

    if (message.author.client) return
    if (message.channel.type == 'dm') return
    if (message.channel.guild.id != config.guild_id) return

    var prefix = config.prefix

    if (message.content == `<@!${client.user.id}>`) {
        message.reply("Prefix is `" + prefix + "`")
        return
    }
    if (message.content.startsWith(`<@!${client.user.id}>`)) {
        prefix = `<@!${client.user.id}>`
    }

    if (message.content.indexOf(prefix) !== 0) return

    // argument declaration
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    var cmd = client.commands.get(command)

    if (!cmd) return

    var ts = new Date().getTime()
    if (commandLastPost[message.author.id] != null) {
        if (ts - commandLastPost[message.author.id] < 1000) {
            return message.reply("Please do not spam commands...")
        }
    }
    commandLastPost[message.author.id] = ts

    cmd.run(client, message, args)
    return



}