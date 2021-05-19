const Discord = require("discord.js")
const cron = require('cron');
const moment = require('moment');
const corona = require('axios');

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

module.exports.run = async (bot, message, args) => {

 let kanal = message.mentions.channels.first();

  if (!kanal) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("**Saat 16:00 Da Atılacak**")
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("#ffd100")
    );
  } else {
    function korona() {
      corona.get('https://corona.lmao.ninja/v2/all')
				.then((response) => {
					const xxcoo = new Discord.MessageEmbed()
						.setColor("BLUE")
						.setTitle('🌍 Dünya Geneli COVID-19 Bilgileri 😷')
						.addField(`😷 Toplam Vaka`,response.data.cases)
            .addField(`⚠️ Bugünkü Vaka`,response.data.todayCases,true)
            .addField(`⚰️ Toplam Ölüm`,response.data.deaths)
            .addField(`⚰️ Bugünkü Ölüm`,response.data.todayDeaths ,true)
            .addField(`😇 Toplam İyileşen`,response.data.recovered)
            .addField(`🧪 Toplam Test`,response.data.tests ,true)
						.setTimestamp();

					message.channel.send(xxcoo);
				})
				.catch((error) => {
					console.log(error);
				});
      wait(5000);
    }
    
    let job1 = new cron.CronJob('0 00 16 * * *', korona); // fires every day, at 16:00:00 for gmt+0, 19:00:00 for gmt+3
    job1.start();
  }
}

console.log(moment().format('YYYY-MM-DD HH:mm:ss'));

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'sayaçk',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};