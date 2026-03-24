import express from 'express';
import mongoose from "mongoose"
import cors from "cors";

import routes from "./routes.js";
import config from './config/config.js';
import { errorHandler } from './middlewares/errorHandler.js';

const PORT = 3000

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "http://localhost:5174",
        ],
        credentials: true
    })
);

app.use(routes);

mongoose.connect(config.dbURL, { dbName: "luxfurnish_dev" })
    .then(() => {
        console.log("Connected to DB");
    })
    .catch(err => {
        console.error('Mongo connection error:', err.message);
        process.exit(1);
    });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})

app.use(errorHandler)