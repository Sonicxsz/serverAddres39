import express from 'express';
import {pool} from './db.js';
import cors from 'cors'
import bodyParser from 'body-parser';
import {mail} from './main.js'
import {router} from './router/router.js'
import TelegramApi from "node-telegram-bot-api"

const port = 3001;

const {TELE_TOKEN} = process.env

// const bot  = new TelegramApi(TELE_TOKEN, {polling: true})
let chatId;
// bot.on('message', (msg) =>{
//   const text = msg.text;
//   console.log('chatId:', msg.chat.id)

//   })

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Укажите точный URL вашего фронтенда
    credentials: true, // Разрешаем отправку credentials
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/api/v1', router)


// app.post('/mail', async(req, res) => {
//   const {order, telegrammOrder, type} = req.body
//   await bot.sendMessage('-1002362181304', telegrammOrder, { parse_mode: 'HTML' })
//   return res.json({res: await mail.send(order, type)})
// })  

pool.query('SELECT NOW()', (err, res) => {
  if(err) {
    console.error('Error connecting to the database', err.stack);
  } else {
    console.log('Connected to the database:', res.rows);
  }
});



app.listen(port, () => {
  console.log('server is running' + ' ' + port);
});



