const express = require('express');
const router = express.Router();
const { sendTestEmail, sendEstimatorResults } = require('../controllers/mail')


router
    .route('/')
    .post(sendTestEmail);

router
    .route('/estimator')
    .post(sendEstimatorResults);

module.exports = router