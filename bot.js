const telebot = require('telebot')
const { editMessageReplyMarkup } = require('telebot/lib/methods')
const bot = new telebot('1270461561:AAF1gDATwrQVQT67M0X8dFYsl1IbwouUzh4')

bot.on('text', (msg) => {
    if(msg.text == 'Николай' || msg.text == 'николай' || msg.text == 'Колян' || msg.text == 'колян'){
        bot.sendMessage(msg.chat.id, text = 'pass')
    }
})

bot.on('text', (msg) => {
    if (msg.text == 'Андрей' || msg.text == 'андрей' || msg.text == 'чирк' || msg.text == 'Чирк'){
        bot.sendMessage(msg.chat.id, text = 'pass')
    }
})

bot.on('/start', (msg) => {
    chat_id = msg.chat.id
    name = msg.from.first_name
    bot.sendMessage(chat_id, text = `Привет ${name}` )
    bot.sendMessage(chat_id, text = '/help - покажу что умею!!')
})

bot.on('/help', (msg) => {
    bot.sendMessage(msg.chat.id, text = 'Я пока что ни чего не умею!')
})



bot.start()