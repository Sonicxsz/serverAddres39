const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {mail} = require('./main');
const apiRouter = require('./controller/api')
const port = 3001;
const TelegramApi = require('node-telegram-bot-api')

const {TELE_TOKEN} = process.env

const bot  = new TelegramApi(TELE_TOKEN, {polling: true})
let chatId;
bot.on('message', (msg) =>{
  const text = msg.text;
  console.log('chatId:', msg.chat.id)

  })

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/api/v1', apiRouter)


app.post('/mail', async(req, res) => {
  const {order, telegrammOrder, type} = req.body
  await bot.sendMessage('-4548345225', telegrammOrder, { parse_mode: 'HTML' })
  return res.json({res: await mail.send(order, type)})
})  

app.listen(port, () => {
  console.log('server is running' + ' ' + port);
});



