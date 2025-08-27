require('dotenv').config()

import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export const adminPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_ELEVATED_USER,
    password: process.env.DB_ELEVATED_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export const systemPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_SYSTEM_USER,
    password: process.env.DB_SYSTEM_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});