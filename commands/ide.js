const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, message) => {
                if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)
  const embed = new Discord.MessageEmbed()
  .setColor(Math.floor(Math.random()*16777215))
  .addField('IDEs e editores de texto ',' Existem muitas maneiras diferentes de editar o código, de código '+
                                    'editores de Integrated Development Environments ("IDEs"). Aqui estão alguns '+
                                     'diferenças entre os dois e alguns exemplos de cada um:')
  .addField('IDEs: ',' IDEs (Ambiente de Desenvolvimento Integrado) são programas que '+
  'incluem um editor de código, mas também integrações com vários outros' +
  'ferramentas de desenvolvimento (linters, controle de versão,' +
  'intellisense / autocomplete, refatoração automática, banco de dados' +
  'gestão, etc.).')
  .addField('Editores de código:', 'Editores de código são editores de texto que geralmente incluem sintaxe' +
  'destaque, gerenciamento de projeto simples e outro código útil' +
  'ferramentas de edição.')
  .addField(`<:webstorm:747081814543433878> WebStorm / PHPStorm (ou qualquer outro produto JetBrains) `,' Estes IDEs, pois têm um conjunto completo de ferramentas para '+
  'desenvolvimento. Além disso, eles têm um sistema de plugins para qualquer coisa '+
  'que eles não incluem automaticamente. [Download do Webstorm] (https://www.jetbrains.com/webstorm/), [Download do PHPStorm] (https://www.jetbrains.com/phpstorm/)')
  .addField(`<:visualcode:747081814094643280> Visual Studio `,' Visual studio é um IDE completo feito pela microsoft. Funciona bem '+
  'com linguagens baseadas em .NET, visto que são feitas pelas mesmas pessoas.' +
  'Eles também incluem um sistema de plugins. [Download] (https://visualstudio.microsoft.com/)')
  .addField(`<:atomide:747083348916174939> Atom `,' Atom é um editor de código baseado em tecnologia da web. É feito por '+
  'GitHub, e tem uma comunidade enorme, com plug-ins para tudo. [Download] (https://atom.io/)')
  .addField(`<:vscode:738064189779869719> VS Code `,' VS Code é outro editor baseado em tecnologia web, mas '+
  'é melhor otimizado e funciona mais rápido. Este é construído por microsoft '+
  'e também possui um grande conjunto de plug-ins. [Download] (https://code.visualstudio.com/)')
  .addField(`<:sublime:747081813570224209> Sublime Text `,' Sublime text começa como um editor pequeno e rápido. ' +
  'É o editor de texto mais rápido que eu já vi. Também existe um '+
  'ampla seleção de plugins. [Download] (https://www.sublimetext.com/)')
  .setFooter(`2020 EZCraft, jpliratavares#4574.`);

  message.channel.send({embed});
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'ide',
  description: 'IDEs and Text Editors',
  usage: 'ide'
};
