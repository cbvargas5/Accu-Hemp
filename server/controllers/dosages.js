const express = require('express');
const dosages = require('../database/models/dosages')

module.exports = {
    getAll: (req, res) => {
        dosages.getAll()
            .then(data => res.status(200).send(data.rows))
            .catch(err => res.status(400).send(err))
    },
    getConditions: (req, res) => {
        dosages.getConditions()
            .then(data => res.status(200).send(data.rows))
            .catch(err => res.status(400).send(err))
    },
    getSeverity: (req, res) => {
        dosages.getSeverity(req.params.id)
            .then(data => res.status(200).send(data.rows))
            .catch(err => res.status(400).send(err.message))
    },
    getDose: (req, res) => {
        dosages.getDose(req.params.id)
            .then(data => res.status(200).send(data.rows))
            .catch(err => res.status(400).send(err.message))
    }
}