const express = require('express');
const router = express.Router();
const { sendTestEmail } = require('../controllers/mail')


router
    .route('/')
    .post(sendTestEmail);

module.exports = router