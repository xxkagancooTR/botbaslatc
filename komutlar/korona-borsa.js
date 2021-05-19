 const xxcooabimiz = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const çalmax = new xxcooabimiz.MessageEmbed()
    .setColor('GOLD') 
.setThumbnail(client.user.avatarURL)/////xxcoo tarafından yapıldı
.addField('Corona Virüs Borsa',`
Borsaya Hoşgeldin

Korona | ⬇️🔴 
Korona Fiyat | ⬇️🔴
Korona Gelecek Durum Tahmin | ⬇️🔴
Korona Fiyat | Can Kaybı

**Not: Borsa El İle Güncellenmektedir**
`)
    .setFooter(``, client.user.avatarURL)/////xxcoo tarafından yapıldı
    .setTimestamp()/////xxcoo tarafından yapıldı
    message.channel.send(çalmax).catch()/////xxcoo tarafından yapıldı

};/////xxcoo tarafından yapıldı ⬆️🟢 ⬇️🔴


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'korona-borsa',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};