import dotenv from "dotenv"
dotenv.config();

import {getJokes} from "./app.js"
import TelegramBot from "node-telegram-bot-api"

const TELEGRAM_BOT_API_KEY=process.env.TELE_KEY;

const telegramBot=new TelegramBot(TELEGRAM_BOT_API_KEY,{polling:true});
telegramBot.onText(/\/start/,(msg)=>{
    telegramBot.sendMessage(msg.chat.id,`Welcome ${msg.chat.first_name}`)
})
telegramBot.onText(/\/joke/,async(msg)=>{
    const jokes=await getJokes();
    telegramBot.sendMessage(msg.chat.id,jokes)
})

