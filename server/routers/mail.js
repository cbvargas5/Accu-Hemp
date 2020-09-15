const express = require('express');
const router = express.Router();
const { sendTestEmail, sendEstimatorResults, sendDropperResults, sendSyringeResults } = require('../controllers/mail')


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

module.exports = router