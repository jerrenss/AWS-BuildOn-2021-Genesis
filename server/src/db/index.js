const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const connectionString = process.env.DB_CONNECTION_STRING

const pool = new Pool({
    connectionString
});

pool.connect((err) => {
    if (!err) {
        console.log('PostgreSQL database is connected!')
    } else {
        console.log('PostgreSQL database failed to connect!')
    }
})

module.exports = pool;