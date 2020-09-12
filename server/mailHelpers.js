const mailer = require('nodemailer');
const { Test } = require('./email_templates/test')

const getEmailData = (to, name, template) => {
    let data = null;
    switch (template) {
        case "test":
            data = {
                from: `Tester Man <${process.env.EMAIL_USER}>`,
                to,
                subject: `Hello ${name}.  This is a test`,
                html: Test()
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
            host: 'smtp-mail.outlook.com',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PW,
            }
        })

        const mail = getEmailData(to, name, type)

        smtpTransport.sendMail(mail)
            .then(() => {
                console.log('Email Sent!')
                smtpTransport.close()
            })
            .catch((err) => {
                console.error(err)
                smtpTransport.close()
            });
    },
}