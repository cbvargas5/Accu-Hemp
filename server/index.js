const express = require('express');
const app = express();
const port = process.env.PORT || 3131;
const path = require('path');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

// console.log(process.env.DB_HOST)

app.listen(port, err => err ? console.error('SERVER ERROR: ', err) : console.log(`Server is listening on port ${port}`))