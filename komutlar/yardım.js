 const xxcooabimiz = require('discord.js');
const ayarlar = require('../ayarlar.json');
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
var prefix = ayarlar.prefix;
exports.run = (bot, message, client, args) => {
  
  
    const çalmax = new xxcooabimiz.MessageEmbed()
    .setColor('GOLD')
.addField('Corona Virüs | Bot Komutları',`
**Bota Lütfen Oy Verirmisin "sebep: Bot Dahada Yaygınlaşır"** [TIKLA](https://top.gg/bot/705517303038607378/vote)
${prefix}korona [TR/CN/JP/US/FR/NE/SN/SD/HR/DE/IR/KZ/NZ] => Korona Verilerine Bakarsınız
${prefix}istatistik => Botun İstatistiğine Bakarsınız
${prefix}davet => Botu Davet Edersiniz
${prefix}korona-borsa => Korona Borsasına Bakarsınız
${prefix}sayaçk => Bu Komudu Hangi Kanala Atarsanız O Kanala Her 19:00 Da Korona Verilerini Atar
${prefix}korona-kap => Korona Kapar (Eğlence Komutudur)
${prefix}korona-test => Korona Test,i Yaparsınız
${prefix}oran => Korona İle İlgili Ayrıntılı Oranlara Bakarsınız
**Botumuz VDS Sponsoru Aramaktadır İletişim xxkagancooTR#7804**
 `)
    .setTimestamp()/////xxcoo tarafından yapıldı
    message.channel.send(çalmax).catch()/////xxcoo tarafından yapıldı

};/////xxcoo tarafından yapıldı


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["x"],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};