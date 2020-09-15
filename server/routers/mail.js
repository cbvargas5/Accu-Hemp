const express = require('express');
const router = express.Router();
const { sendTestEmail, sendEstimatorResults, sendDropperResults, sendSyringeResults, sendContactFormToAH, sendFeedbackFormToAH } = require('../controllers/mail')


router
    .route('/')
    .post(sendTestEmail);

router
    .route('/estimator')
    .post(sendEstimatorResults);

router
    .route('/dropper')
    .post(sendDropperResults);

router
    .route('/syringe')
    .post(sendSyringeResults);

router
    .route('/contact')
    .post(sendContactFormToAH);

router
    .route('/feedback')
    .post(sendFeedbackFormToAH);

module.exports = router