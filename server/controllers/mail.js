const { sendEmailToClient } = require('../mailHelpers')

module.exports = {
    sendTestEmail: (req, res) => {
        sendEmailToClient(req.body, 'test')
            .then(() => res.status(200).end())
            .catch(err => res.status(400).send(err))
    },
}