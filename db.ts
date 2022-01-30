const Pool = require('pg').Pool;

require('dotenv').config();

const devConfig = {
	user: process.env.PG_USER,
	password: process.env.PG_PASSWORD,
	host: process.env.HOST,
	database: process.env.DATABASE,
	port: process.env.PORT,
};

// const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
const prodConfig = process.env.DATABASE_URL; // connect to postgresql db

const pool = new Pool(
	process.env.NODE_ENV === 'production' ? prodConfig : devConfig
);
