const TelegramBot = require('node-telegram-bot-api');

const token = '1046385267:AAF7FCr8oDTmHBgZY05BqAvQG_QckKits8g'

var Agent = require('socks5-https-client/lib/Agent');

const bot = new TelegramBot(token, 
    {
        polling: true,
        request: {
            agentClass: Agent,
            agentOptions: {
                socksHost: '185.232.20.215',
                socksPort: '1080'
            }
        }
    });

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hola ${msg.contact.first_name} ${msg.contact.last_name}`);
})