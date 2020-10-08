const express = require('express');
const router = express.Router();
const { sendEstimatorResults, sendDropperResults, sendSyringeResults, sendContactFormToAH, sendFeedbackFormToAH, sendSurveyToAH, sendAddProductsRequestToAH, sendAdvertisingRequestToAH } = require('../controllers/mail')


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

router
    .route('/survey')
    .post(sendSurveyToAH);

router
    .route('/addproducts')
    .post(sendAddProductsRequestToAH);

router
    .route('/advertising')
    .post(sendAdvertisingRequestToAH);

module.exports = router