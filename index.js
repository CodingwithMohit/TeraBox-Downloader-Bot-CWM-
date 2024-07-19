const telegramBot = require("node-telegram-bot-api");
const token = "7120593105:AAHGPXWBUp1GV2fft95PNpNpQU2Uytr1ZKc";

const bot = new telegramBot(token, { polling: true });

bot.on("message", (msg) => {
    let chatID = msg.chat.id;

    bot.sendMessage(chatID, "Hello");
});