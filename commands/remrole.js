const db = require('quick.db')
exports.run = (client, message, args) =>{
  if (db.get(`${message.author.id}.ban`) != null && db.get(`${message.author.id}.ban`) == 1) return message.channel.send(`⛔ ➤ ${message.author} Você está **Banido(a)** de utilizar a Mayara.`)
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);

  if (!message.author.id === '242263403001937920'){
      message.channel.send("You don't have the permissions to use this command!");
  }
  
  else{

      if(!rMember) 
          return message.channel.send("Não encontrei o membro.");
      
      let role = args.join(" ").slice(23);
      if(!role) 
          return message.channel.send("Especifique um cargo!");
      
      let gRole = message.guild.roles.cache.find(roles => roles.name === role);
      if(!gRole) 
          return message.channel.send("Não encontrei esse cargo.");

      if(!rMember.roles.cache.has(gRole.id)) 
          return message.reply("Ele não tem esse cargo.");
      
      else{
          rMember.roles.remove(gRole.id).catch(console.error);
          
          try{
              rMember.send(`Desculpe você perdeu o cargo ${gRole.name}`);
              message.channel.send(`O usuário ${rMember} Perdeu o cargo ${gRole.name} `);
          }
          catch(e){
              console.log(e.stack);
              message.channel.send(`RIP <@${rMember.id}>, Retiramos o cargo ${gRole.name} Dele.`)
          }
      }
  }
}