const mailer = require('nodemailer');
const test = require('./email_templates/test')
const estimator = require('./email_templates/estimator')
const dropper = require('./email_templates/dropper')
const syringe = require('./email_templates/syringe')

const ACCU_HEMP_EMAIL = process.env.EMAIL_USER
const ACCU_HEMP_PASSWORD = process.env.EMAIL_PW

const getEmailData = (clientData, template) => {
    let data = null;
    switch (template) {
        case "test":
            const { to, name } = clientData
            console.log(to, name)
            data = {
                from: `Test Person <${ACCU_HEMP_EMAIL}>`,
                to,
                subject: `Howdy again ${name}.  This is a test`,
                html: test()
            }
            break;

        case "estimator":
            data = {
                from: `Accu-Hemp.com <${ACCU_HEMP_EMAIL}>`,
                to: clientData.to,
                subject: 'AccuHemp Dose Estimator Results',
                html: estimator(clientData)
            }
            break;

        case "dropper":
            data = {
                from: `Accu-Hemp.com <${ACCU_HEMP_EMAIL}>`,
                to: clientData.to,
                subject: 'AccuHemp Dose Dropper Results',
                html: dropper(clientData)
            }
            break;
        case "syringe":
            data = {
                from: `Accu-Hemp.com <${ACCU_HEMP_EMAIL}>`,
                to: clientData.to,
                subject: 'AccuHemp Dose Syringe Results',
                html: syringe(clientData)
            }
            break;
        case "syringe":
            data = {
                from: `Accu-Hemp.com <${ACCU_HEMP_EMAIL}>`,
                to: clientData.to,
                subject: 'AccuHemp Dose Syringe Results',
                html: syringe(clientData)
            }
            break;
        default:
            data;
    }
    return data
}


module.exports = {
    sendEmail: (clientData, type) => {
        const smtpTransport = mailer.createTransport({
            host: 'smtp-mail.outlook.com',
            auth: {
                user: ACCU_HEMP_EMAIL,
                pass: ACCU_HEMP_PASSWORD,
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