const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
var fs = require('file-system');
// const db = require('../db');
const usrKycInfo = require('./server/models').usrKycInfo;

// Set up the express app
const app = express();

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

app.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 	console.log('requesttttttttttttt',req.files)
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
 	console.log('sampleFile>>>>>>>>>>>>>>>>>',sampleFile)
 	let name_of_file = sampleFile.name
  // Use the mv() method to place the file somewhere on your server
  	fs.mkdir('project_images/exchange_project', [0o765], function(err) {
  		if(err) console.log('errrorrr',err )
  		console.log('file created')
  	});	// fs.mkdirSync('1/2/3/4/5', [mode]);
	fs.writeFile('project_images/exchange_project'+'/'+`${ name_of_file}`, 'aaa', function(err) {
		if(err) console.log('errrorrr',err )
  		console.log('image saved>>>>>>>>>>>>>')
	})
  // sampleFile.mv('/project_images'+'/'+`${sampleFile.name}`, function(err) {
  //   if (err)
  //     return res.status(500).send(err);
 	// console.log('responseee>>>>>', res)
  //   res.send('File uploaded!');
  // });
});

// app.get('/api/userKycinfo', function(req, res){
// 	console.log('requesttt in side list>>>>>>>>>>>>>>>>>>>>>>>..')
// 	usrKycInfo.find({},function(err, instance){
// 		console.log('waiting for resulttttttttt')
// 		if(err) console.log('inside err>>>>>>>>>>', err)
// 		console.log('inside instance>>>>>>>>>>', instance)
// 		var result = instance
// 		return res.json({'user': result});
// 	})
// });

// app.post('/api/userKycinfo', function(req, res){
// 	console.log('requesttt in side create>>>>>>>>>>>>>>>>>>>>>>>..',req.body)
// 	usrKycInfo.create({aadharHolder_name:req.body.aadharHolder_name,panHolder_name: req.body.panHolder_name, aadhar_number:req.body.aadhar_number, pan_number:req.body.pan_number,pan_dob:req.body.pan_dob, pan_filepath:req.body.pan_filepath, aadhar_filepath:req.body.aadhar_filepath, verification_flag:req.body.verification_flag},function(err, instance){
// 		if(err) console.log('inside err>>>>>>>>>>', err)
// 		console.log('inside instance>>>>>>>>>>', instance)
// 		return res.json({'user': instance});
// 	})
// } 
// // => res.status(200).send({
// //   message: 'Welcome to the beginning of nothingness.',
// // })
// );

module.exports = app;