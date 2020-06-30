const pool = require('../index')

module.exports = {
    getAll: () => pool.query(`SELECT * FROM dosages`)
        //Need to add query to grab by condition
        //Need to add query to grab by condition && Severity
}