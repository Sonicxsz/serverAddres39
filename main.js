const dotenv = require('dotenv');
const nodeMailer = require('nodemailer');
dotenv.config()

const {EMAIL_HOST, EMAIL_HOST_USERNAME, EMAIL_PORT, EMAIL_HOST_PASSWORD} = process.env


class Mail {
    #transporter = null;
    constructor(){
        this.#transporter = this.#getTransporter()
    }

    #getTransporter(){
        return nodeMailer.createTransport({
            host: EMAIL_HOST,
            port: EMAIL_PORT,
            secure: false,
            auth: {
                user: EMAIL_HOST_USERNAME,
                pass: EMAIL_HOST_PASSWORD
            }
        })
    }

    async send(reciever, message){
        try{
            const info = await this.#transporter.sendMail({
                from: 'leadeer',
                to: reciever,
                subject: 'Welcome to test site',
                text: message,
                html: `<b>${message}</b>`
            }) 
            return info.messageID
        }catch(err){
            return err
        }
    }
}

const mail = new Mail()

module.exports = { mail };
