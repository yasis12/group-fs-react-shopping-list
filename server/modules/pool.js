const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'fs_react_shopping', 
});

module.exports = pool;

