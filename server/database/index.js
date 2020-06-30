const express = require('express');
require('dotenv').config();


const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM dosage;', (error, results) => {
        if (error) {
            throw error
        }
        console.log('rows:', results.rows)
    })
}

getUsers()
console.log()