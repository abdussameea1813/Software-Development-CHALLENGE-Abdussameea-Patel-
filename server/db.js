const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "GhostTF141",  // your actual password
    host: "localhost",
    port: 5432,
    database: "books"  // your actual database name
});

module.exports = pool;
