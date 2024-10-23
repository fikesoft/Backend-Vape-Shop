// bot.js
const TelegramBot = require('node-telegram-bot-api');
const { token } = require('./config/telegram'); // Import the bot token

// Set up the bot instance
const bot = new TelegramBot(token, { polling: true });

// Handle incoming messages from Telegram users
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Thank you for your message!');
});

module.exports = bot;
