  exports.run = (client, message, args) =>{
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    let user;
    
      if (message.author.id !="767132923287306281"){
        message.channel.send("U naum tem perm malz!");
    }

    else{

        if(!rMember) 
            return message.channel.send("Naum achei esse cara ae.");

        let role = args.join(" ").slice(23);
        if(!role) 
            return message.channel.send("Especifique um cargo!");

        let gRole = message.guild.roles.cache.find(roles => roles.name === role);
        if(!gRole) 
            return message.channel.send("Não encontrei o cargo");

        if(rMember.roles.cache.has(gRole.id)) 
            return message.channel.send("Ele já tem esse cargo.");

        else{
            rMember.roles.add(gRole.id).catch(console.error);
            
            try{
                rMember.send(`Parabéns você recebeu o cargo de ${gRole.name}`);
                message.channel.send(`O Usuário ${rMember} Tem um novo cargo o: ${gRole.name}`);
            }
            catch(e){
                console.log(e.stack);
                message.channel.send(`Parabens ao <@${rMember.id}>, ele recebeu o cargo ${gRole.name}.`)
            }
        }
    }
  }
  