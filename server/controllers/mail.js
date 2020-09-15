const { sendEmail } = require('../mailHelpers')

module.exports = {
    sendTestEmail: (req, res) => {
        sendEmail(req.body, 'test')
            .then(() => res.status(200).end())
            .catch(err => res.status(400).send(err))
    },

    sendEstimatorResults: (req, res) => {
        sendEmail(req.body, 'estimator')
            .then(() => res.status(200).end())
            .catch(err => res.status(400).send(err))
    },

    sendDropperResults: (req, res) => {
        sendEmail(req.body, 'dropper')
            .then(() => res.status(200).end())
            .catch(err => res.status(400).send(err))
    },

    sendSyringeResults: (req, res) => {
        sendEmail(req.body, 'syringe')
            .then(() => res.status(200).end())
            .catch(err => res.status(400).send(err))
    },

    sendContactFormToAH: (req, res) => {
        sendEmail(req.body, 'contact')
            .then(() => res.status(200).end())
            .catch(err => res.status(400).send(err))
    },
}

/**
 * Fields for [contact]:
 * 
 */