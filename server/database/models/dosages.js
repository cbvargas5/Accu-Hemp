const pool = require('../index')

module.exports = {
    getAll: () => pool.query('SELECT * FROM dosages'),
    getByCondition: (condition) => pool.query(`SELECT * FROM dosages WHERE condition = ${condition}`), //might choose to select severity column rather than entire table
    getDose: (condition, severity) => pool.query(`SELECT lowerdose, upperdpse FROM dosages WHERE condition = ${condition} AND severity = ${severity}`)
}