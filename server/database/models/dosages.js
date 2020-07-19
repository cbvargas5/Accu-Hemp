const pool = require('../index')

module.exports = {
    getAll: () => pool.query('SELECT * FROM dosages'),
    getConditions: () => pool.query('SELECT DISTINCT condition FROM dosages'),
    getByCondition: (condition) => pool.query(`SELECT * FROM dosages WHERE condition = INITCAP('${condition}')`), //might choose to select severity column rather than entire table
    getDose: (id) => pool.query(`SELECT lowerdose, upperdose FROM dosages WHERE id = ${id}`)
}