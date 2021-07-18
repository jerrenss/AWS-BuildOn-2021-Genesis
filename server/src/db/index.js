const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const connectionString = process.env.DB_CONNECTION_STRING

const pool = new Pool({
    connectionString
});

module.exports = pool;