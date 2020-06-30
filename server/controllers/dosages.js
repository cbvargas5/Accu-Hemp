const express = require('express');
const dosages = require('../database/models/dosages')

module.exports = {
    getAll: (req, res) => {
        dosages.getAll()
            .then(data => res.status(200).send(data))
            .catch(err => res.status(400).send(err))
    }
}