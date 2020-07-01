const pool = require('../index')

module.exports = {
    getAll: () => pool.query(`SELECT * FROM products`)
        //need to revisit to find out what i need from query
}