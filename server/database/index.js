const { Pool } = require('pg');
require('dotenv').config();

let pool;

if (process.env.ENV_MODE == 'development') {
    pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: 5432
    })
} else if (process.env.ENV_MODE == 'production') {
    pool = new Pool({
        user: process.env.RDS_USERNAME,
        host: process.env.RDS_HOSTNAME,
        database: process.env.RDS_DB_NAME,
        password: process.env.RDS_PASSWORD,
        port: process.env.RDS_PORT
    })
}


pool.connect()
    .then(() => console.log('Connected to PSQL'))
    .catch((err) => console.error(err))

module.exports = pool;