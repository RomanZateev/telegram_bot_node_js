const TelegramBot = require('node-telegram-bot-api');

const token = '1046385267:AAF7FCr8oDTmHBgZY05BqAvQG_QckKits8g'

var Agent = require('socks5-https-client/lib/Agent');

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
    bot.sendMessage(msg.chat.id, `Hola ${msg.contact.first_name} ${msg.contact.last_name}`);
})