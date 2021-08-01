    /*
      __  __                               ____        _   
    |  \/  | __ _ _   _  __ _ _ __ __ _  | __ )  ___ | |_ 
    | |\/| |/ _` | | | |/ _` | '__/ _` | |  _ \ / _ \| __|
    | |  | | (_| | |_| | (_| | | | (_| | | |_) | (_) | |_ 
    |_|  |_|\__,_|\__, |\__,_|_|  \__,_| |____/ \___/ \__|
                  |___/                                   

                  Feito pelo jplt#3301
    */





    const Discord = require('discord.js');
    const firebase = require('firebase')
    const client = new Discord.Client();
    const config = require('./config.json');
    const db = require('quick.db');
    const express = require('express');
    const enmap = require('enmap')
    const fs = require('fs')
    const fech = require('node-fetch')
    const superagent = require('superagent')
    const app = express();
    client.commands = new Discord.Collection()
    client.aliases = new Discord.Collection()
    app.get('/', (request, response) => {
      const ping = new Date();
      ping.setHours(ping.getHours() - 3);
      console.log(
        `Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
      );
      response.sendStatus(200);
    });
    app.listen(process.env.PORT);

    let active = new Map();
    let ops = { active: active }




    client.on('message', async message => {
      const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
      if (regex.exec(message.content)) {
          let prefix = db.get(`prefix_${message.guild.id}`);
      if (prefix === null) {
        prefix = config.prefix;
      }
    const nolink = new Discord.MessageEmbed()
          .setTitle(`**__Links não são permitidos neste servidor__**`)
          .setColor(`#882D61`)
          .setDescription(
            `*Verifique as regras.*`
          )
          .setFooter(`Mayara • Anti-Link`, `https://i.imgur.com/0O6XHhN.png`);
            if (!message.member.hasPermission("ADMINISTRATOR")) return
        if (db.get(`offi_${message.guild.id}`) === 'antilink') return;
        message.reply(nolink);
              await message.delete({ timeout: 500 });
      }
    });

    client.on('message', message => {

    //try {

      if (message.channel.type === 'dm') {
    console.log('teste')
    } else {


      

      let prefix = db.get(`prefix_${message.guild.id}`);
      if (prefix === null) {
        prefix = config.prefix;
      }


      if (message.author.bot) return;
      if (!message.content.toLowerCase().startsWith(prefix)) return;

      const args =
        message.content
          .trim()
          .slice(prefix.length)
          .split(/ +/g) ||
        message.content
          .trim()
          .slice(config.prefix.lenght)
          .split(/ +/g);
      const command = args.shift().toLowerCase();

      try {
        if (!command) return;
        if (command === 'ajuda') {
          const commandHelp = require(`./commands/help.js`);
          commandHelp.run(client, message, args);
          return;
        }
        const commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
      } catch (err) {
        console.error('Erro:' + err);
        const nfound = new Discord.MessageEmbed()
          .setTitle(`**__Comando não encontrado__**`)
          .setColor(`#882D61`)
          .setDescription(
            `*Verifique sua ortografia.*
          
          Para desativar esse comando use _${prefix}config ajuda off_`
          )
          .addField(`Para saber meus comandos, use:`, `\`${prefix}help\``)
          .setFooter(`Mayara • Help`, `https://i.imgur.com/0O6XHhN.png`);
        if (db.get(`off_${message.guild.id}`) === 'ajuda') return;
        message.channel.send(nfound);
        }
      }
    //} catch (error) {
    // console.error('Erro de DM');
    //}


    });
    fs.readdir("./commands/", (error, files) => {
        if (error) throw error
        files.forEach(file => {
            if (!file.endsWith(".js")) return
            if (file.startsWith("_")) return
            let props = require(`./commands/${file}`)
            let commandName = file.split(".")[0]
            client.commands.set(commandName, props)
            if (props.aliases != null) {
                for (let i = 0; i < props.aliases.length; i++) {
                    client.commands.set(props.aliases[i], props)
                }
            }
          console.log(`[COMMAND LOADED] >> ${commandName}... ${props.aliases != null ? "Alaises: " + props.aliases.join(", ") : ""}`)
        })
    })
    fs.readdir("./events/", (error, files) => {
        if (error) throw error
        files.forEach(file => {
            if (!file.endsWith(".js")) return
            const event = require(`./events/${file}`)
            let eventName = file.split(".")[0]
            console.log(`[EVENT LOADED] >> ${eventName}`)
            client.on(eventName, event.bind(null, client))
        })
    })
    client.on("message", (message) => {
      if (message.content.startsWith(`<@!769133702890258452>`)) {
          if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Você não tem permissao.`)
    db.delete(`prefix_${message.guild.id}`)
    return message.channel.send(`✅ | Meu prefixo foi resetado com sucesso!`)

      }
    });

client.login('TOKEN');

