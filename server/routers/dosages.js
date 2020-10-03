const express = require('express');
const router = express.Router();
const dosages = require('../controllers/dosages')

router
    .route('/')
    .get(dosages.getAll);

router
    .route('/conditions')
    .get(dosages.getConditions);

router
    .route('/:id')
    .get(dosages.getSeverity);

router
    .route('/dose/:id')
    .get(dosages.getDose)

module.exports = router