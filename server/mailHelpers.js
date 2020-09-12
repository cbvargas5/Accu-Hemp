const mailer = require('nodemailer');
const mail = require('./controllers/mail');


const getEmailData = (to, name, template) => {
    let data = null;
    switch (template) {
        case "test":
            data = {
                from: `Tester Man <${process.env.EMAIL_USER}>`,
                to,
                subject: `Hello ${name}.  This is a test`
            }
            break;
        default:
            data;
    }
    return data
}


module.exports = {
    sendEMail: (to, name, type) => {
        const smtpTransport = mailer.createTransport({
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PW,
                }
            })
            // smtpTransport.sendMail(mail)
        return 'sup'
    },
}