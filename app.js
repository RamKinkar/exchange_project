const express = require('express');
const logger = require('morgan');
const path = require('path')
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const webpack = require('webpack')
const config = require('./webpack.config')
const validator = require('validator');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const ejs = require('ejs');
const flash    = require('connect-flash');
// var fs = require('file-system');
// const db = require('../db');
// const usrKycInfo = require('./server/models').usrKycInfo;


// Set up the express app
const app = express();

app.engine('html', ejs.renderFile);
app.set('client', path.join(__dirname, '/client'));
app.set('view engine', 'html');
app.use(cookieParser());
// app.use(expressSession({ secret: 'keyboard cat', rolling: true, resave: true, saveUninitialized: false }));
app.use(flash());
app.use(express.static(path.join(__dirname, '/client')));

app.use('/css', express.static(path.resolve(__dirname, './client/css')));
app.use('/images', express.static(path.resolve(__dirname, './client/images')));
app.use('/js', express.static(path.resolve(__dirname, './client/js')));
app.use('/javascript', express.static(path.resolve(__dirname, './client/javascript')));
// app.use('/js', express.static(path.resolve(__dirname, '../client/js')));
app.use('/fonts', express.static(path.resolve(__dirname, './client/fonts')));
app.use('/build', express.static(path.resolve(__dirname, './build')));


// Log requests to the console.
app.use(logger('dev'));
app.use(fileUpload());

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
require('./server/routes')(app);
// app.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to the beginning of nothingness.',
// }));
app.get('*', function (req, res){
	console.log('inside first requestssssssssssssss');
   res.sendFile('index.html', { root: path.join(__dirname, './client/html') });
})




module.exports = app;