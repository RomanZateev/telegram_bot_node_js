const TelegramBot = require('node-telegram-bot-api');

const token = '1046385267:AAF7FCr8oDTmHBgZY05BqAvQG_QckKits8g'

var Agent = require('socks5-https-client/lib/Agent');

var fs = require('fs');

const bot = new TelegramBot(token, 
    {
        polling: true,
        request: {
            agentClass: Agent,
            agentOptions: {
                socksHost: 'orbtl.s5.opennetwork.cc',
                socksPort: '999',
                socksUsername: '981105764',
                socksPassword: 'PUlBJeTZ'
            }
        }
    });

bot.on('message', msg => {
    
    var Hi = 'hi'
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id,"Hi OG!");
    }

    if (msg.text.toString() == "GOKILLA") {
        bot.sendMessage(msg.chat.id,"GOKILLA лучший!");
    } 
   /*
    if (msg.text){
        bot.sendMessage(msg.chat.id, "Hola my friend",
        {
            "reply_markup": {
                "keyboard": [["HI"],   ["GANG"], ["GOKILLA"]]
                }
        });
    }*/

    var photo = "photo"

    const buffer = fs.readFileSync('images/gokilla.png');

    if (msg.text.toString().toLowerCase().includes(photo)){
        bot.sendPhoto(msg.chat.id, buffer)
    }

    var video = "video"

    if (msg.text.toString().toLowerCase().includes(video)){

        const buffer = fs.readFileSync('videos/Gokilla - Парень без жопы.mp4');

        bot.sendVideo(msg.chat.id, buffer,
            {
                caption : "Как тебе?",
                reply_markup: 
                {
                    "keyboard": [["Годнота!"], ["Вата!"], ["ОУДЖИ", "Жека шарит!"]]
                }
            });
    }
})

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Welcome");        
});

bot.on("polling_error", (err) => console.log(err));

