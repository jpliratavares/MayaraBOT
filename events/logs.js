module.exports = async(bot, message, args) => {
 bot.on("channelCreate", async channel => {
      var logs = channel.guild.channels.find(c => c.name === 'logs');
      if (!logs) return console.log("Can't find logs channel.");
      const Discord = require("discord.js");
      const cembed = new Discord.MessageEmbed()
          .setTitle("Channel Created")
          .setColor(red_light)
          .setDescription(`A **${channel.type} channel**, by the name of **${channel.name}**, was just created!`)
          .setTimestamp(new Date());
      logs.send(cembed)
  });
  bot.on("channelDelete", async channel => {
    const Discord = require("discord.js");
      var logs = channel.guild.channels.find(c => c.name === 'logs');
      if (!logs) return console.log("Can't find logs channel.");
      const cembed = new Discord.MessageEmbed()
          .setTitle("Channel Deleted")
          .setColor(dark_red)
          .setDescription(`A **${channel.type} channel**, by the name of **${channel.name}**, was just deleted!`)
          .setTimestamp(new Date())
      logs.send(cembed)
  });
  bot.on("channelEdit", async channel => {
    const Discord = require("discord.js");
      var logs = channel.guild.channels.find(c => c.name === 'logs');
      if (!logs) return console.log("Can't find the #logs channel");
      const cembed = new Discord.MessageEmbed()
          .setTitle("Channel Edited")
          .setColor(gold)
          .setDescription(`A **${channel.type} channel**, by the name of **${channel.name}**, has just been edited!`)
          .setTimestamp(new Date())
      logs.send(cembed)
  })
  bot.on('messageEdit', async(message) => {
      try {
          const logs = message.guild.channels.find('name', 'logs');
          if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
              await message.guild.createChannel('logs', 'text');
          }
          if (!logs) {
              return console.log('The logs channel does not exist and cannot be created in ' + message.guild.name)
          }
          if (!logs){
              return; 
          }
          const entry = await message.guild.fetchAuditLogs({
              type: 'MESSAGE_EDIT'
          }).then(audit => audit.entries.first())
          let user;
          if (entry.extra.channel.id === message.channel.id && (entry.target.id === message.author.id) && (entry.createdTimestamp > (Date.now() - 5000)) && (entry.extra.count >= 1)) {
              user = entry.executor.username
          } else {
              user = message.author
          }
          const { MessageEmbed } = require("discord.js");
          const logembed = MessageEmbed()
              .setTitle("Message Edited")
              .setAuthor(user.tag, message.author.displayAvatarURL)
              .setColor(gold)
              .setTimestamp(new Date())
              .setDescription(`**Message sent by ${message.author.username}** >> edited in **${message.channel.name}**\n\n`)
              .addField("Message Content Before", `\`\`\`fix\n${message.content.before}\`\`\``, true)
              .addField("Message Content After", `\`\`\`fix\n${message.content.after}\`\`\``, true)
              .setFooter(`${bot.user.username} security logs • <#${message.channel.id}> `, bot.user.displayAvatarURL)
          logs.send(logembed)
          console.log()
      } catch (err) {
          console.log(err)
      }
  })
  bot.on('messageDelete', async(message) => {
      try {
        const logs = message.guild.channels.find('name', 'logs');
        if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
            await message.guild.createChannel('logs', 'text');
        }
        if (!message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
            return console.log('I don\'t have permissions and the event was cannceled');
        }
        const entry = await message.guild.fetchAuditLogs({
            type: 'MESSAGE_DELETE'
        }).then(audit => audit.entries.first())
        let user;
        if (entry.extra.channel.id === message.channel.id && (entry.target.id === message.author.id) && (entry.createdTimestamp > (Date.now() - 5000)) && (entry.extra.count >= 1)) {
            user = entry.executor.username
        } else {
            user = message.author
        }
          const Discord = require("discord.js");
          const logembed = new Discord.MessageEmbed()
              .setTitle('Message Deleted')
              .setAuthor(user.tag, message.author.displayAvatarURL)
              .addField(`**Message sent by ${message.author.username}> deleted in ${message.channel.name}**\n\n`, `\`\`\`fix\n${message.content}\`\`\``, false)
              .setColor(gold)
              .addField("Channel Message Was deleted in", `<#${message.channel.id}>`, false)
              .setFooter(`${bot.user.username} security logs`, message.guild.iconURL)
              .setTimestamp(new Date())
              // console.log(entry)
          logs.send(logembed);
      } catch (err) {
          console.log(err)
      }
  })
  bot.on("messageUpdate", async(oldMessage, newMessage) => {
          if (oldMessage.author.bot) {
              return;
          }
          let logs = oldMessage.guild.channels.find(`name`, `logs`);
          if (oldMessage.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
              await oldMessage.guild.createChannel('logs', 'text');
          }
          if (!oldMessage.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
              return console.log('The logs channel does not exist and cannot be created')
          };
          const Discord = require("discord.js");
          logs.send({
              embed: new Discord.MessageEmbed()
                  .setTitle("Edited Message")
                  .setColor("85839f")
                  .setTimestamp(new Date())
                  .addField("Message Author", '\u200B' + oldMessage.author.tag)
                  .addField("OldMessage Content", `\u200B${oldMessage.content}`)
                  .addField("New Message Content", `\u200B${newMessage.content}`)
                  .addField("channel", '\u200B' + oldMessage.channel)
                  .addField("Time", '\u200B' + newMessage.createdAt)
          }).catch(console.error)
      })}