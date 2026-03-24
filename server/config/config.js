import dotenv from 'dotenv';

dotenv.config({ path: './config/.env' });

const config = {
    dbURL: process.env.DB_CONNECTION_STRING,
    jwtSecret: process.env.JWT_SECRET,
    saltRounds: 10
};

export default config;