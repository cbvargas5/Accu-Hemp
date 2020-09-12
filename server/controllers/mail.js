const mailHelper = require('../mailHelpers')

module.exports = {
    sendEmail: (req, res) => {
        const { to, name, type } = req.body
        console.log(to, name, type)
        mailHelper.sendEMail(to, name, type)
    },
}