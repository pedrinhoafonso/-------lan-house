Comando De Setar o Prefixo Com Quick.db :

const db = require("quick.db");
const Discord = require("discord.js");
exports.run = (client, message, args) => {
if(!message.member.hasPermission("MANAGE_GUILD")){
 return message.reply("***Você não tem permissão de `ADMINISTRADOR`***"); 
}
if(!args[0]){
 return message.reply("***informe o Prefixo!***"); 
}

db.set(`prefix_${message.guild.id}`, args[0]); 
message.reply(`***Meu prefixo neste servidor foi alterado para*** \`${args[0]}\`***!***`); 

}

Comando De Buscar O Prefixo(Coloque na index):   

let prefix = db.fetch(`prefix_${message.guild.id}`);
   if(prefix === null) prefix = prefixo;



pedroafonso#7917 Com todos Seus Direitos Reservados copyright
