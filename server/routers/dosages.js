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
    .route('/dose/:id')
    .get(dosages.getDose)

router
    .route('/:condition(*)')
    .get(dosages.getByCondition);

module.exports = router