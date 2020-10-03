const pool = require('../index')

module.exports = {
    getAll: () => pool.query('SELECT * FROM dosages'),
    getConditions: () => pool.query('SELECT DISTINCT condition FROM dosages'),
    getSeverity: (id) => pool.query(`SELECT id, severity FROM dosages WHERE id = ${id}`),
    getDose: (id) => pool.query(`SELECT lowerdose, upperdose FROM dosages WHERE id = ${id}`)
}