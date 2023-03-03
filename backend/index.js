
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './Routes/users.js'
import * as dotenv from 'dotenv';
dotenv.config()



const app = express();

app.use('/users', userRoutes);

app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const CONN_URL = `mongodb+srv://kartikChinda:${process.env.PASS}@cluster0.zxwsqrn.mongodb.net/?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5000

mongoose.connect(CONN_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server up and running on Port ${PORT}`)))
    .catch((error) => console.log(error))


