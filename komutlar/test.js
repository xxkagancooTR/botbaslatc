 const xxcooabimiz = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const çalmax = new xxcooabimiz.MessageEmbed()
    .setColor('GOLD') 
.setThumbnail(client.user.avatarURL)/////xxcoo tarafından yapıldı
.addField('Corona Virüs Test',`

İyi => Büyük İhtimalle Korona Değilsiniz
Halsiz => 100 de 70 İhtimalle Koronasınız
Çok Kötü => 100 de 99.9 Koronasınız
Kendini Kötü Hissediyorsan Hemen **112** Acil Servisi Ara !`)
    .setFooter(``, client.user.avatarURL)/////xxcoo tarafından yapıldı
    .setTimestamp()/////xxcoo tarafından yapıldı
    message.channel.send(çalmax).catch()/////xxcoo tarafından yapıldı

};/////xxcoo tarafından yapıldı


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'korona-test',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};