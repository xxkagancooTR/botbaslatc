const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const zaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()

    .addField("<a:satellite:780415037968744459> **Gecikme süreleri**","Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("<a:gear:780418347454955531> **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("<a:alarm_clock:780417859406266378>**Çalışma süresi**", zaman, true)
    .addField("<a:bust_in_silhouette:780410872249188353> **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("<a:signal_strength:780407394710585355> **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
    .addField("<a:door:780413966127595530> **Kanallar**", client.channels.cache.size.toLocaleString(), true)
    .addField("<a:floppy_disk:780417499854274560> **Discord.JS sürüm**", "v" + Discord.version, true)
 .addField(":beginner: **Bot yapım tarihi**", `15.12.2020`, true)
    .addField("<a:floppy_disk:780417499854274560> **Node.JS sürüm**", `${process.version}`, true)
    .addField("<a:desktop:780416987909455882> **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .addField("<a:desktop:780416987909455882> **Bit**", `\`${os.arch()}\``, true)
    .addField("<a:desktop:780416987909455882> **İşletim Sistemi**", `\`\`${os.platform()}\`\``, true)
  return message.channel.send(istatistikler);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};
exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};