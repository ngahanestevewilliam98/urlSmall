const nodemailer = require('nodemailer');
const file = require('../helpers/file');

module.exports = class database_ {
    constructor() {
        this._connection = undefined;
    }
    static async init() {
        let data;
        try {
            data = JSON.parse(await file.rFSync('./.env', 'utf8'));
        } catch (err) {
            console.error(err);
            throw new Error();
        }

        this._connection = {
            "gmail": {
                "host": data['mail']['gmail']['host'],
                "port": data['mail']['gmail']['port'],
                "auth": {
                    "user": data['mail']['gmail']['auth']['user'],
                    "password": data['mail']['gmail']['host']['password']
                }
            },
            "maildev": {
                "host": data['mail']['maildev']['host'],
                "port": data['mail']['maildev']['port'],
                "sender": data['mail']['maildev']['sender']
            }
        };
    }

    static async sendProd(dest, subject, body) {
        let transporter = nodemailer.createTransport({
            host: this._connection['gmail']['host'],
            port: this._connection['gmail']['port'],
            secure: false,
            auth: {
                user: this._connection['gmail']['auth']['user'],
                pass: "softtime123"
            },
        });
        
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: this._connection['gmail']['auth']['user'],
            to: dest,
            subject: subject,
            html: `<b>${body}</b>`
        });
    }

    static async sendDev(dest, subject, body) {
        let transporter = nodemailer.createTransport({
            host: this._connection['maildev']['host'],
            port: this._connection['maildev']['port'],
            secure: false,
            tls: {
                rejectUnauthorized: false
            }
        });
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: this._connection['maildev']['sender'],
            to: dest,
            subject: subject,
            html: `<b>${body}</b>`
        });
    }

};