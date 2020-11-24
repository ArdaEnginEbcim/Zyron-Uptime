require("express")().listen(1343);

const db = require("quick.db");
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true });
client.login("TOKEN");
const fetch = require("node-fetch");
const fs = require('fs')

//Uptime 
const oynuyor = "Zyron Uptime BETA";
const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(`Uptimelanan botlardan birinde hata var! Uptimelayamıyorum!`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

//Oynuyor


client.on("ready", async () => {
  client.appInfo = await client.fetchApplication();
  setInterval(async () => {
    client.appInfo = await client.fetchApplication();
  }, 60000);
  console.log("Bot Aktif");

  client.user.setStatus("oynuyor");
  client.user.setActivity(oynuyor, {
    type: "STREAMING",
    url: "https://twitch.tv/SpanyRieS"
  });
});


client.on("ready", () => {
if(!Array.isArray(db.get("linkler"))) {
db.set("linkler", [])
}
})

client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "u.ekle") {
  var link = spl[1]
  fetch(link).then(() => {
    if(db.get("linkler").map(z => z.url).includes(link)) return message.channel.send("****╔════════════「 Zyron Uptime 」════════════╗ \n \n  Bu Bot Saten Sistemde Ekli <:arps:777142378225074207> \n \n ╚════════════「 Zyron Uptime 」════════════╝**")
    message.channel.send("**╔════════════「 Zyron Uptime 」════════════╗ \n \n Yazdığınız URL Başarıyla Sisteme Eklendi!** <:arp:777142378557341746> \n \n  **╚════════════「 Zyron Uptime 」════════════╝**");
    db.push("linkler", { url: link, owner: message.author.id})
  }).catch(e => {
    return message.channel.send("**╔════════════「 Zyron Uptime 」════════════╗ \n \n Hata : Lutfen Bir URL Girin <:arps:777142378225074207> \n \n ╚════════════「 Zyron Uptime 」════════════╝**")
  })
  }
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "u.bot-say") {
  var link = spl[1]
 message.channel.send(`**Sistemde ${db.get("linkler").length} Bot Aktif Tutuluyor!**`)
}})


client.on("message", async message => {

  if(!message.content.startsWith("u.eval")) return;
  if(!["761281964107628546"].includes(message.author.id)) return;
  var args = message.content.split("u.eval")[1]
  if(!args) return message.channel.send(":warning: | Kod?")
  
      const code = args
    
    
      function clean(text) {
          if (typeof text !== 'string')
              text = require('util').inspect(text, { depth: 3 })
          text = text
              .replace(/`/g, '`' + String.fromCharCode(8203))
              .replace(/@/g, '@' + String.fromCharCode(8203))
          return text;
      };
  
      var evalEmbed = ""
      try {
          var evaled = await clean(await eval(await code));
          if (evaled.constructor.name === 'Promise') evalEmbed = `\`\`\`\n${evaled}\n\`\`\``
          else evalEmbed = `\`\`\`js\n${evaled}\n\`\`\``
          
  if(evaled.length < 1900) { 
     message.channel.send(`\`\`\`js\n${evaled}\`\`\``);
  } else {
    var hast = await require("hastebin-gen")(evaled, { url: "https://hasteb.in" } )
  message.channel.send(hast)
  }
      } catch (err) {
          message.channel.send(`\`\`\`js\n${err}\n\`\`\``);
      }
  })

const Discord = require('discord.js');

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");
  if(spl[0] == "u.yardım") {
let embed = new Discord.MessageEmbed()
.setColor('#0014ff')
.setDescription(`**• Selam! <@${message.author.id}> Sende 7/24 Yap Botunu. \n \n •  Prefixim: **u.**\n • Dilim: **TR :flag_tr:`)
.addField("╔════════════「 Zyron Uptime 」════════════╗ \n \n • Uptime Bot Komutları", `> • [u.ekle](https://discord.gg/uttQgYu8ac): **Sisteme Link Ekle.**\n > • [u.link-kaldır](https://discord.gg/uttQgYu8ac): **Linki Sistemden Kaldır. (YAKINDA)**\n > • [u.bot-kontrol](https://discord.gg/uttQgYu8ac): **Botunuzu Kontrol Edin. (YAKINDA)**\n > • [u.linklerim](https://discord.gg/uttQgYu8ac): **Sistemdeki Linklerinizi Gösterir. (YAKINDA)**`)
.addField("• Ana Komutlar", `> • [u.lang](https://discord.gg/uttQgYu8ac): **Dil Değiştirirsiniz. (YAKINDA)**\n > • [u.botdavet](https://discord.gg/uttQgYu8ac) **Botu Sunucunuza Davet Edersiniz.**\n > • [u.istatistik](https://discord.gg/uttQgYu8ac): **Botun İstatistiğine Bakarsınız.**\n > • [u.bot-say](https://discord.gg/uttQgYu8ac): **Sistemde Kaç Bot Ekli Ona Bakarsınız.** \n \n **╚════════════「 Zyron Uptime 」════════════╝**`)
.addField(" • Linkler:", "• [Davet Et](https://discord.com/oauth2/authorize?client_id=769650045574185021&scope=bot&permissions=8) • [Destek Sunucusu](https://discord.gg/uttQgYu8ac) •")
.setImage("https://api.creavite.co/out/7ac606b4-4690-446d-b6aa-aef6bce93bf8_standard.gif")
.setAuthor(`Zyron Uptime Botu`, client.user.avatarURL)
.setFooter(`Zyron Support`, )
return message.channel.send(embed);
    }
  })

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");
  if(spl[0] == "u.sa") {
let embed = new Discord.MessageEmbed()
.setColor('#0014ff')
.setAuthor("Zyron Bot",client.user.avatarURL())
.setDescription("**╔════════════「 İstatistik 」════════════╗** \n \n ")
.addField('İsim',client.user.username)
.addField('Toplam kullanıcı:',client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toString())
.addField('Toplam kanal:',client.channels.cache.size)
.addField('Toplam Sunucu:',client.guilds.cache.size)
.addField('Link Sayısı :',)
.addField('Bellek kullanımı:', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
.setFooter(`╚══════════════「 Zyron Uptime 」═════════════╝`)
return message.channel.send(embed);
    }
  })

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");
  if(spl[0] == "u.botdavet") {
let embed = new Discord.MessageEmbed()
.setColor('#0014ff')
.setAuthor("Zyron Bot",client.user.avatarURL())
.setDescription("**╔════════════「 Bot Davet 」════════════╗** \n \n • [**Tıkla Ve Davet Et : **](https://discord.com/oauth2/authorize?client_id=769650045574185021&scope=bot&permissions=8)  Botu Sunucunuza Ekleyerek Bize Destek Verirsiniz \n Ve Kendi Sunucunuzdada Kendi Botunuz Gibi Kullanabilirsiniz.")
.setFooter(`╚════════════════「 Bot Davet 」══════════════╝`)
return message.channel.send(embed);
    }
  })
