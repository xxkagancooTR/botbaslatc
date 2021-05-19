const xdiscord = require("discord.js");
const ayarlar = require("../ayarlar.json")

var prefix = ayarlar.prefix;

const corona = require('axios');
exports.run = async (client, message, args) => {

  
  


if (!args.length) {
			corona.get('https://corona.lmao.ninja/v2/all')
				.then((response) => {
				const xxcoo = new xdiscord.MessageEmbed()
						.setColor("BLUE")
						.setTitle('🌍 Dünya Geneli COVID-19 Bilgileri 😷')
						.addField(`😷 Toplam Vaka`,response.data.cases)
            .addField(`⚠️ Bugünkü Vaka`,response.data.todayCases,true)
            .addField(`⚰️ Toplam Ölüm`,response.data.deaths)
            .addField(`⚰️ Bugünkü Ölüm`,response.data.todayDeaths ,true)
            .addField(`😇 Toplam İyileşen`,response.data.recovered)
            .addField(`🧪 Toplam Test`,response.data.tests ,true)
          .setThumbnail("https://cdn.discordapp.com/attachments/779728003227320345/800282051643310080/sat7ir.jpg")
						.setTimestamp();

					message.channel.send(xxcoo);
				})
				.catch((error) => {
					console.log(error);
				});
		}
		else {
			corona.get(`https://corona.lmao.ninja/v2/countries/${args[0]}`)
				.then((response) => {
					const embedyapan = new xdiscord.MessageEmbed()
						.setColor('RED')
						.setTitle(`${args[0]} 🌍 - COVID19 Bilgileri 😷`)
						.addField(`🌍 Ülke`,response.data.country)
            .addField(`🔍 Tanı Konulan Hasta`,response.data.cases ,true)
            .addField(`⚠️ Bugünkü Vaka`,response.data.todayCases,true)
            .addField(`⚰️ Toplam Ölüm`,response.data.deaths ,true)
            .addField(`⚰️ Bugünkü Ölüm`,response.data.todayDeaths ,true)
            .addField(`😇 Toplam İyileşen Hasta`,response.data.recovered ,true)
            .addField(`😷 Aktif Vaka`,response.data.active ,true)
            .addField(`🤕 Toplam Kritik Vaka`,response.data.critical ,true)
            .addField(`🧪 Toplam Test`,response.data.tests ,true)
						.setTimestamp()
            .setThumbnail(response.data.countryInfo.flag)
          console.log(response)
					message.channel.send(embedyapan);
				})
				.catch((error) => {
          message.channel.send(':x: Hata \n Lütfen ülke girerken global olarak giriniz. Örnek: ?korona china | ?korona turkey')
					console.log(error);
				});
		}
}
    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["corona", "covid", "covid19", "covıd", "virüs", "coronavirüs"],
  permLevel: 0
};

exports.help = {
  name: 'korona',
  description: 'Ülkelerdeki COVID-19 vakalarını inceyelebilirsiniz',
  usage: 'korona <ülke>'
};
