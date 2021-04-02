const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const getBlockRouter = require('./routes/getblock')
const getInfoRouter = require('./routes/getinfo')
const getRawTransactionRouter = require('./routes/getrawtransaction')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/getblock', getBlockRouter);
app.use('/getinfo', getInfoRouter);
app.use('/getrawtransaction', getRawTransactionRouter);

module.exports = app;
