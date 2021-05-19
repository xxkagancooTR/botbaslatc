const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("idle");
  //rahatsız etmeyin "dnd"
  //boşta "idle"
  client.user.setActivity(`${prefix}yardım | Botumuz Onay Bekliyor... | Powered BY: xxkagancooTR`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Powered BY xxkagancooTR`);
    console.log(`Saat: [${moment().format('YYYY-MM-DD HH:mm:ss')}] `);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: aktif `);
};
