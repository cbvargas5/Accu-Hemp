const pool = require('../index')

module.exports = {
    getAll: () => pool.query(`SELECT * FROM products`)
}