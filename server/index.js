const express = require('express');
const app = express();
const port = process.env.PORT || 3131;
const path = require('path');
require('dotenv').config();
const DOSAGES = require('./routers/dosages')
const PRODUCTS = require('./routers/products')
const main = require('./testEmail')

main().catch(console.error);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

//routes
app.use('/dosages', DOSAGES)
app.use('/products', PRODUCTS)


app.listen(port, err => err ? console.error('SERVER ERROR: ', err) : console.log(`Server is listening on port ${port}`))