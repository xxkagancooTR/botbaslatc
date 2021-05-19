 const xxcooabimiz = require('discord.js');
const ayarlar = require('../ayarlar.json');
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
var prefix = ayarlar.prefix;
exports.run = (bot, message, client, args) => {
  
  
    const çalmax = new xxcooabimiz.MessageEmbed()
    .setColor('GOLD')
.addField('Corona Virüs | Oranlar',`
**Bota Lütfen Oy Verirmisin "sebep: Bot Dahada Yaygınlaşır"** [TIKLA](https://top.gg/bot/705517303038607378/vote)
------Türkiye (TR) Geneli Oranlar------
HASTALARDA ZATÜRRE ORANI = %3,3
YATAK DOLULUK ORANI = %56,7
FİLYASYON ORANI = %99,9
ORTALAMA TEMASLI TESPİT SÜRESİ = 9 SAAT
Son Güncelleme = 18/04/2021/00:19
 `)
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
    name: 'oran',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};