const { url } = require('inspector');
const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '5416110456:AAE7XtggQZfunZxmiwAyGEZqH0d4dPX0dic';
const bot = new TelegramBot(TOKEN, {
    polling: true
});


bot.on('message', (msg) => {
const chatId = msg.chat.id;


bot.sendMessage(chatId, msg.from.first_name + ':', {
    reply_markup: {
        keyboard: [
                ['Контакти', 'Наша геопозиція', 'Отримати консультацію', 'Більше про нас']
            ],
        resize_keyboard: true
    }
});


if(msg.text == 'Більше про нас') {
bot.sendMessage(chatId, 'Привіт👋, ти зараз спілкуєшся з ботом компанії SoftBit🤖 яка розташована в багатьох містах України🇺🇦. На даний час компанія щодня набуває все більше і більше вмілих робітників👨‍💻, якщо тебе цікавить наша робота то ти можеш зконтактуватись з нами📞☎️ Також наша компанія особлива тим що була створена вчора ввечір коли Андрій сів за комп’ютер)🔥')
};


if(msg.text == 'Контакти') {
    bot.sendMessage(chatId, 'Контакти', {
        reply_markup: {
            inline_keyboard: [
                 [
                    {
                        text: 'Номер телефону',
                        callback_data: 'phone'
                        
                     },
                    {
                        text: 'Соціальні мережі',
                        callback_data: 'soc',
                     }
                 ]
             ]
        }
    })
};

if(msg.text == 'Наша геопозиція') {
    bot.sendMessage(chatId, 'Виберіть ваше місто з доступних знизу:', {
        reply_markup: {
            inline_keyboard: [
                 [
                    {
                        url: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/1.%D0%9F%D0%BB%D0%BE%D1%89%D0%B0_%D0%A0%D0%B8%D0%BD%D0%BE%D0%BA_%D1%83_%D0%BC.%D0%A1%D0%B0%D0%BC%D0%B1%D1%96%D1%80.JPG',
                        text: 'Самбір',
                        callback_data: 'sambir'
                     },
                    {
                        url: 'https://i.ytimg.com/vi/Ad85_BaTTLE/maxresdefault.jpg',
                        text: 'Новояворівськ',
                        callback_data: 'novo',
                     },
                     {
                         url: 'https://editorial.uefa.com/resources/0255-0d8ada52ad3f-ecf8497bfa7b-1000/ploshcha_rynok_market_square_in_lviv.jpeg',
                         text: 'Львів',
                         callback_data: 'lviv',
                      },
                      {
                          url: 'http://tvoemisto.tv/media/gallery/full/y/a/yavoriv_main.jpg',
                          text: 'Яворів',
                          callback_data: 'yav',
                       }
                 ]
             ]
        }
    });

    bot.sendMessage(chatId, 'В Самборі знаходиться 1 наш офіс');
    bot.sendMessage(chatId, 'В Новояворівську знаходиться 3 наших офіси');
    bot.sendMessage(chatId, 'У Львові знаходиться 8 наших офісів');
    bot.sendMessage(chatId, 'В Яворові знаходиться 2 наших офіси');
};

if(msg.text == 'Отримати консультацію') {
    bot.sendMessage(chatId, 'Виберіть з доступних варіантів куди ви хочете відправити свої дані', {
        reply_markup: {
            inline_keyboard: [
                 [
                    {
                        url: 'papirnyk11@gmail.com',
                        text: 'Надіслати свої дані на Email',
                     },
                     {
                        url: 'https://t.me/AndriyPapirnyk',
                        text: 'Надіслати свої дані на Telegram',
                     }
                 ]
             ]
        }
    });

};

bot.on('callback_query', query => {
    if (query.data == 'phone') {
        bot.answerCallbackQuery(query.id, '');
        bot.sendContact(query.message.chat.id, '+380966554970', 'Manager');
    }
     else if (query.data == 'soc') {
        bot.answerCallbackQuery(query.id, '');
        bot.sendMessage(query.message.chat.id, 'Наші соціальні мережі', {
            reply_markup: {
                inline_keyboard: [
                     [
                        {
                            text: 'Інстаграм',
                            url: 'https://www.instagram.com/andriy.papirnyk/'
                         },
                        {
                            text: 'GitHub',
                            url: 'https://github.com/AndriyPapirnyk'
                         }, 
                        {
                            text: 'Telegram',
                            url: 'https://t.me/AndriyPapirnyk'
                        }
                     ]
                 ]
            }
        })
    }ж
});
     
});

