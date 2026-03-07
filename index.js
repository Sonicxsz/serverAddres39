const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {mail, isDev} = require('./main');
const apiRouter = require('./controller/api')
const port = 3001;

let bot = null;

if (!isDev) {
  const TelegramApi = require('node-telegram-bot-api')
  const {TELE_TOKEN} = process.env
  bot = new TelegramApi(TELE_TOKEN, {polling: true})
  bot.on('message', (msg) => {
    console.log('chatId:', msg.chat.id)
  })
} else {
  console.log('[DEV MODE] Telegram бот не подключён — используется мок');
}

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/api/v1', apiRouter)


app.post('/mail', async(req, res) => {
  const {order, telegrammOrder, type} = req.body

  if (isDev) {
    console.log('[DEV MOCK] Telegram сообщение не отправлено:');
    console.log('[DEV MOCK]', telegrammOrder);
  } else {
    await bot.sendMessage('-1002362181304', telegrammOrder, { parse_mode: 'HTML' })
  }

  return res.json({res: await mail.send(order, type)})
})  

app.listen(port, () => {
  const mode = isDev ? 'DEVELOPMENT' : 'PRODUCTION';
  console.log(`server is running on port ${port} [${mode}]`);
});



