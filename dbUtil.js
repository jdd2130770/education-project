const sql = require('mssql');
const config = {
    server: 'jdd2130db.c7kxo7pzex4v.us-east-1.rds.amazonaws.com',
    database: 'production',
    user: 'Ender',
    password: 'wjs258great',
    port: 1433
}

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to MSSQL')
        return pool
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
    sql, poolPromise
}
