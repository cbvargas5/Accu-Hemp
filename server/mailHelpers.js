const mailer = require('nodemailer');
const test = require('./email_templates/test')

const getEmailData = (clientData, template) => {
    let data = null;
    switch (template) {
        case "test":
            const { to, name } = clientData
            console.log(to, name)
            data = {
                from: `Test Person <${process.env.EMAIL_USER}>`,
                to,
                subject: `Howdy again ${name}.  This is a test`,
                html: test()
            }
            break;
        default:
            data;
    }
    return data
}


module.exports = {
    sendEmailToClient: (clientData, type) => {
        const smtpTransport = mailer.createTransport({
            host: 'smtp-mail.outlook.com',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PW,
            }
        })

        const mail = getEmailData(clientData, type)

        return smtpTransport.sendMail(mail)
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