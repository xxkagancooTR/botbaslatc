const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        
        .setTitle(`${client.user.username} Davet Menüsü `)
        .setDescription(` **Botun Davet Linki İçin** [TIKLA](https://discord.com/oauth2/authorize?client_id=705517303038607378&scope=bot&permissions=8) \n  **Destek Sunucusu İçin** [TIKLA](https://discord.gg/qWExewUXJB) \n  **Bote oy vermek için** [TIKLA](https://top.gg/bot/705517303038607378/vote )`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix} Davet Sistemi Kullandı !`, message.author.avatarURL)
    .setColor(`#ffd100`)
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};