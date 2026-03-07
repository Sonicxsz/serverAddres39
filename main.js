const dotenv = require('dotenv');
const nodeMailer = require('nodemailer');
dotenv.config()

const {EMAIL_HOST, EMAIL_HOST_USERNAME, EMAIL_PORT, EMAIL_HOST_PASSWORD, MODE} = process.env
const isDev = MODE === 'development';

class Mail {
    #transporter = null;
    constructor(){
        if (!isDev) {
            this.#transporter = this.#getTransporter()
        }
    }

    #getTransporter(){
        return nodeMailer.createTransport({
            host: EMAIL_HOST,
            port: 465,
            secure: true,
            auth: {
                user: EMAIL_HOST_USERNAME,
                pass: EMAIL_HOST_PASSWORD
            }
        })
    }

    async send(message, type){
        if (isDev) {
            console.log('[DEV MOCK] Email не отправлен. Subject:', type);
            console.log('[DEV MOCK] Body:', message);
            return 'mock-email-id';
        }

        try{
            const info = await this.#transporter.sendMail({
                from: 'arbi.hizriev.feedback@gmail.com',
                to: 'Addrest.39@mail.ru',
                subject: type,
                text: message,
                html: message
            }) 
            return info.messageID
        }catch(err){
            return err
        }
    }
}

const mail = new Mail()

module.exports = { mail, isDev };
