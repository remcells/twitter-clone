import express from 'express';
import path from 'path';
import connectDb from './connect-db.js';

import __dirname from './dirname.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';

import usersRouter from './routes/users.js';
import chikaRouter from './routes/chika.js';
import 'dotenv/config';
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

console.log(dbUsername);

const app = express();
connectDb(
  `mongodb+srv://${dbUsername}@cluster0.${dbPassword}.mongodb.net/?retryWrites=true&w=majority`
);
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/chika', chikaRouter);

app.use(function (req, res, next) {
  res
    .status(404)
    .json({ message: "We couldn't find what you were looking for 😞" });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json(err);
});

export default app;
