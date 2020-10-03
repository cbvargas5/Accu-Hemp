const mailer = require('nodemailer');
const test = require('./email_templates/test')
const estimator = require('./email_templates/estimator')
const dropper = require('./email_templates/dropper')
const syringe = require('./email_templates/syringe')
const contact = require('./email_templates/contact')
const feedback = require('./email_templates/feedback')
const survey = require('./email_templates/survey')
const addProducts = require('./email_templates/addProducts')
const advertising = require('./email_templates/advertising')

const { ACCU_HEMP_EMAIL } = process.env
const { ACCU_HEMP_PASSWORD } = process.env

const getEmailData = (clientData, dataType) => {
    let data = null
    const { to } = clientData
    switch (dataType) {
        case "test":
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
                to,
                subject: 'AccuHemp Dose Estimator Results',
                html: estimator(clientData)
            }
            break;

        case "dropper":
            data = {
                from: `Accu-Hemp.com <${ACCU_HEMP_EMAIL}>`,
                to,
                subject: 'AccuHemp Dose Dropper Results',
                html: dropper(clientData)
            }
            break;
        case "syringe":
            data = {
                from: `Accu-Hemp.com <${ACCU_HEMP_EMAIL}>`,
                to,
                subject: 'AccuHemp Dose Syringe Results',
                html: syringe(clientData)
            }
            break;
        case "contact":
            data = {
                from: `Accu-Hemp.com <${ACCU_HEMP_EMAIL}>`,
                to: ACCU_HEMP_EMAIL,
                subject: `Contact Form Submitted by: ${clientData.name}`,
                html: contact(clientData)
            }
            break;
        case "feedback":
            data = {
                from: `Accu-Hemp.com <${ACCU_HEMP_EMAIL}>`,
                to: ACCU_HEMP_EMAIL,
                subject: `Feedback Form Submitted`,
                html: feedback(clientData)
            }
            break;
        case "survey":
            data = {
                from: `Accu-Hemp.com <${ACCU_HEMP_EMAIL}>`,
                to: ACCU_HEMP_EMAIL,
                subject: `Survey Submitted`,
                html: survey(clientData)
            }
            break;
        case "addproducts":
            const { uploadedLogo, uploadedProductInfo } = clientData
            data = {
                from: `Accu-Hemp.com <${ACCU_HEMP_EMAIL}>`,
                to: ACCU_HEMP_EMAIL,
                subject: `Add Products Request Submitted by: ${clientData.companyName}`,
                html: addProducts(clientData),
                attachments: [uploadedLogo, uploadedProductInfo]
            }
            break;
        case "advertising":
            data = {
                from: `Accu-Hemp.com <${ACCU_HEMP_EMAIL}>`,
                to: ACCU_HEMP_EMAIL,
                subject: `Advertising Request Submitted by: ${clientData.companyName}`,
                html: advertising(clientData)
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
            host: 'accugentix.com',
            secure: true,
            port: 465,
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