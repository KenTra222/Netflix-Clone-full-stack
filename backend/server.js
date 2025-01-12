// const express = require('express'); //commonjs
import express from 'express' // esm
import authRoutes from './routes/auth.route.js';
import {ENV_VARS} from './config/envVars.js';
import { connectDB } from './config/db.js';

const app = express();

const PORT = ENV_VARS.PORT;
app.use(express.json())//will allow us to parse req.body object

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:' + PORT)
});