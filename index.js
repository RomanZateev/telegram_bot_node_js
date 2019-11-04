const TelegramBot = require('node-telegram-bot-api');

const token = '1046385267:AAF7FCr8oDTmHBgZY05BqAvQG_QckKits8g'

const bot = new TelegramBot(token, {polling: true});

require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hola ${msg.contact.first_name} ${msg.contact.last_name}`);
})