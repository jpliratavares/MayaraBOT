function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }
  
  exports.run = async (client, message) => {
  
   const Discord = require("discord.js");
      
   if(!['767132923287306281' , '749730006321725550'].includes(message.author.id)) return message.channel.send("Você não tem permissão.")
   try{
           const code = message.content.slice(1).trim().split(" ").slice(1).join(" ")
           if (!code) return message.channel.send('Coloque algum codigo para eu poder executar!')
  
          let evaled = eval(code)
          
          if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
  
          message.channel.send(clean(evaled), {code:"xl"});
          
          
      }catch(err){
        message.delete().catch();

          message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
  
  }