import express from "express";
import { pool } from "./store/db.js";
import cors from "cors";
import bodyParser from "body-parser";
import { mail } from "./pkg/mailer.js";
import { router } from "./router/router.js";
import TelegramApi from "node-telegram-bot-api";
import { fileURLToPath } from "url";
import path from "path";
const port = 3001;

const { TELE_TOKEN } = process.env;

const BODY_MAX_SIZE = "2mb";

// const bot  = new TelegramApi(TELE_TOKEN, {polling: true})
let chatId;
// bot.on('message', (msg) =>{
//   const text = msg.text;
//   console.log('chatId:', msg.chat.id)

//   })

const app = express();

// Фиксим корсы
app.use(
  cors({
    origin: "http://localhost:5173", // Укажите точный URL вашего фронтенда
    credentials: true, // Разрешаем отправку credentials
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Настраиваем раздачу статики
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.json({ limit: BODY_MAX_SIZE }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", router);

// app.post('/mail', async(req, res) => {
//   const {order, telegrammOrder, type} = req.body
//   await bot.sendMessage('-1002362181304', telegrammOrder, { parse_mode: 'HTML' })
//   return res.json({res: await mail.send(order, type)})
// })

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to the database", err.stack);
  } else {
    console.log("Connected to the database:", res.rows);
  }
});

app.listen(port, () => {
  console.log("server is running" + " " + port);
});
