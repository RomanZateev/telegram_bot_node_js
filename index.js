process.env.NTBA_FIX_319 = 1

const TelegramBot = require('node-telegram-bot-api')

var Agent = require('socks5-https-client/lib/Agent')

var fs = require('fs')

const localTOKEN = `1046385267:AAF7FCr8oDTmHBgZY05BqAvQG_QckKits8g`

var TOKEN = process.env.TOKEN

const PORT = process.env.PORT

const URL = `https://my-applicate.herokuapp.com/`

const localURL = `https://de5d44cd.ngrok.io`

const bot = new TelegramBot(TOKEN, 
    {
        webHook: {
            port: PORT
        },
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

app.listen(port, function() {
    console.log('Port' + PORT)
    console.log('Token' + TOKEN)
    console.log('Url' + URL)
});


bot.setWebHook(URL + TOKEN)

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});