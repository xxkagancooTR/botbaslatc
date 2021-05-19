const Discord = require('discord.js');//discord gerektirir discord.js
exports.run = async (client,message,args) => {
let kullanici = message.mentions.users.first();
if(!kullanici) return message.channel.send(`Kimin Korona Kapacağını Etiketlemedin Örnek = ?korona-kap @ahmet`);
const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
.setTitle('Başarılı!')
  .setDescription(` ${kullanici.tag} Korona Kaptı`)
.setImage('https://media1.tenor.com/images/6767d7a638dacbbfd94cea141154d31c/tenor.gif?itemid=16771959')
message.channel.send(embed);

}//bhnu nie koymadın :D

   exports.conf = {//export değil exports
   enabled: true,//komut aktifmi yani kullanıma sunulsunlı dio
   guildOnly: false,//sadece sunuucdamı kullanılsın dio bunu evet yani true yap dm dsn kulllanamadınlar
   aliases:['d'],//komutun diğer adları
   permLevel: 0,//kimlerin kullanıca
kategori: "moderasyon"
}
exports.help = { 
  name:'korona-kap',
  description:'Etiketlediğiniz Kişiyi Döversiniz',
  usage: 'döv'
}
 