const { sendEmailToClient } = require('../mailHelpers')

module.exports = {
    sendTestEmail: (req, res) => {
        sendEmailToClient(req.body, 'test')
            .then(() => res.status(200).end())
            .catch(err => res.status(400).send(err))
    },

    sendEstimatorResults: (req, res) => {
        sendEmailToClient(req.body, 'estimator')
            .then(() => res.status(200).end())
            .catch(err => res.status(400).send(err))
    },

    sendDropperResults: (req, res) => {
        sendEmailToClient(req.body, 'dropper')
            .then(() => res.status(200).end())
            .catch(err => res.status(400).send(err))
    },

    // sendSyringeResults: (req, res) => {
    //     sendEmailToClient(req.body, 'estimator')
    //         .then(() => res.status(200).end())
    //         .catch(err => res.status(400).send(err))
    // },
}

/**
 * Fields for [Dropper/Syringe]:
 * lowerdose, upperdose, email
 */