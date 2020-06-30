const express = require('express');
const products = require('../database/models/products')

module.exports = {
    getAll: (req, res) => {
        products.getAll()
            .then(data => res.status(200).send(data))
            .catch(err => res.status(400).send(err))
    }
}