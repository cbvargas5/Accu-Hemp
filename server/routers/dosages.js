const express = require('express');
const router = express.Router();
const dosages = require('../controllers/dosages')

router
    .route('/')
    .get(dosages.getAll);


module.exports = router