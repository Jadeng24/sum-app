// eslint-disable-next-line prefer-destructuring
const Pool = require('pg').Pool;
require('dotenv').config();

// const devConfig = {
//   user: process.env.POSTGRES_USER,
//   password: process.env.POSTGRES_PASSWORD,
//   host: process.env.POSTGRES_HOST,
//   database: process.env.POSTGRES_DATABASE,
//   port: process.env.POSTGRES_PORT,
// };

const devConfig = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`;

const proConfig = process.env.DATABASE_URL; // heroku addons

const pool = new Pool({
    connectionString:
        process.env.NODE_ENV === 'production' ? proConfig : devConfig,
});

module.exports = pool;
