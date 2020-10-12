const express = require('express');
const app = express();
const helmet = require("helmet");
const port = process.env.PORT || 3131;
const path = require('path');
require('dotenv').config();
const DOSAGES = require('./routers/dosages')
const PRODUCTS = require('./routers/products')
const MAIL = require('./routers/mail')


// app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../client/dist')));

//routes
app.use('/dosages', DOSAGES)
app.use('/api/products', PRODUCTS)
app.use('/mail', MAIL)
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
})
app.listen(port, err => err ? console.error('SERVER ERROR: ', err) : console.log(`Server is listening on port ${port}`))