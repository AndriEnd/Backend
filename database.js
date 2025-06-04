const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Auth_Db',
  password: 'Backend17',
  port: 5432
});

module.exports = pool;