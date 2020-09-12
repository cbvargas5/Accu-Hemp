const mailHelper = require('../mailHelpers')

module.exports = {
    sendEmail: (req, res) => {
        console.log(mailHelper.sendEMail())
    },
}