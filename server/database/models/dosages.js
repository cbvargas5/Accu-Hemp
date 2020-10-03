const pool = require('../index')

module.exports = {
    getAll: () => pool.query('SELECT * FROM dosages'),
    getConditions: () => pool.query('SELECT DISTINCT condition FROM dosages'),
    getByCondition: (condition) => pool.query(`SELECT id, severity FROM dosages WHERE condition = INITCAP('${condition}')`),
    getDose: (id) => pool.query(`SELECT lowerdose, upperdose FROM dosages WHERE id = ${id}`)
}