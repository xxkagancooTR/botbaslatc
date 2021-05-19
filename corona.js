const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "xxcoo"); //dokunma çalışmaz
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000)


const xxcoo = require('discord.js');
const client = new xxcoo.Client();
const ayarlar = require('./ayarlar.json');


const snekfetch = require('snekfetch');
const fs = require('fs');
const YouTube = require('simple-youtube-api');
const queue = new Map();  
const xxcooswabi = require('quick.db')
const moment = require('moment');
const ms = require('parse-ms');
const xpress = require('express');
const pp = express()
require('moment-duration-format')
require('./util/eventLoader')(client);



var prefix = process.env.xxcooprefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new xxcoo.Collection();
client.aliases = new xxcoo.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

////////KOMUTLAR BURDAN SONRA

client.on('ready', () => {
  const moment = require("moment");
require("moment-duration-format");

 setInterval(() => {
const calismasure = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
let botdurum = client.channels.cache.find(c => c.id === '829409264770482238')//Botun sürekli mesaj atacağı kanal.
const botistatistik = new xxcoo.MessageEmbed()
	.setColor('RED')
	.setTitle('= Bot İstatistikleri =')
	
.addField(`discord.js`,`v${xxcoo.version}`)
    .addField("<a:gear:780418347454955531> **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("<a:alarm_clock:780417859406266378>**Çalışma süresi**", calismasure, true)
    .addField("<a:bust_in_silhouette:780410872249188353> **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("<a:signal_strength:780407394710585355> **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
    .addField("<a:door:780413966127595530> **Kanallar**", client.channels.cache.size.toLocaleString(), true)
//https://cnslink.cf
botdurum.send(botistatistik);

  }, 60000); //Milisaniye cinsinden. 1 saniye =  1000 milisaniye. Örnek Olarak 1 saat = 3600000milisaniye
  //https://convertlive.com/tr/u/dönüştürmek/milisaniye/a/saniye Bu siteden hesaplamasını yapabilirsiniz.
});
client.on('guildDelete', guild => {

let  corona = new xxcoo.MessageEmbed()

.setColor("RED")
.setTitle("BOT ATILDI")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.cache.get('798502713800654878 ').send(corona);

});


client.on('guildCreate', guild => {

let corona = new xxcoo.MessageEmbed()

.setColor("GREEN")
.setTitle("Bot Eklendi")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.cache.get('798502713800654878').send(corona);

});


client.login(process.env.xxcootoken);
//-------------—------------—---—————-------KOMUTLAR-----------------------------------------//
