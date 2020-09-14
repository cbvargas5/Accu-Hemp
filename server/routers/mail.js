const express = require('express');
const router = express.Router();
const { sendTestEmail, sendEstimatorResults, sendDropperResults } = require('../controllers/mail')


router
    .route('/')
    .post(sendTestEmail);

router
    .route('/estimator')
    .post(sendEstimatorResults);

router
    .route('/dropper')
    .post(sendDropperResults);

module.exports = router