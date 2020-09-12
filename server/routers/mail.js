const express = require('express');
const router = express.Router();
const mail = require('../controllers/mail')


router
    .route('/')
    .post(mail.sendEmail);

module.exports = router