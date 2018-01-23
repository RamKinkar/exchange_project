const UserKycInfo = require('../models').usrKycinfo;
const db = require('../models');
const model1 = require('../models/usrkycinfo');
// const sequelize = require('sequelize');
const Sequelize = require('sequelize');
// const sequelize = new Sequelize('exchangedb_dev', 'postgres', 'jupjeet', 'postgres');
const sequelize = db.sequelize;
	// console.log('db>>>>>>>>>>>>>>', db.sequelize.options.query)

module.exports = {
	    create(req, res) {
   //  	console.log('inside get requestttt', req.body)
   //  	console.log('print the instance of table......>>>>>>>>>', model1)
   //  	// console.log('print the instance of table......>>>>>>>>>', UserKycInfo)
   //  	INSERT INTO "model1"(
   //          id, "aadharHolder_name", "panHolder_name", aadhar_number, pan_number, 
   //          aadhar_filepath, pan_filepath, pan_dob, verification_flag)
   //  VALUES (req.body.id, req.body.aadharHolder_name, req.body.panHolder_name, req.body.aadhar_number, req.body.pan_number, 
   //          req.body.pan_dob,req.body.pan_filepath ,req.body.aadhar_filepath ,'true'); 
   //  	model1.create({
   //      id: req.body.id,
   //      aadharHolder_name: req.body.aadharHolder_name,
   //      panHolder_name: req.body.panHolder_name,
   //      aadhar_number: req.body.aadhar_number,
   //      pan_number: req.body.pan_number,
   //      pan_dob: req.body.pan_dob,
   //      pan_filepath: req.body.pan_filepath,
   //      aadhar_filepath: req.body.aadhar_filepath,
   //    }).then(users => {
			//   console.log('userrrrrrrrrr createdddddd',users)
			// })
    // return UserKycInfo.
    //   .findAll({})userKycinfo
    //   .then((UserKycInfo) => res.status(200).send(UserKycInfo))
    //   .catch((error) => res.status(400).send(error));
  },

  // create(req, res) {
  // 	console.log('req>>>>>>>>>>', req.body)
  //   return UserKycInfo
  //     .create({
  //       id: req.body.id,
  //       aadharHolder_name: req.body.aadharHolder_name,
  //       panHolder_name: req.body.panHolder_name,
  //       aadhar_number: req.body.aadhar_number,
  //       pan_number: req.body.pan_number,
  //       pan_dob: req.body.pan_dob,
  //       pan_filepath: req.body.pan_filepath,
  //       aadhar_filepath: req.body.aadhar_filepath,
  //     })
  //     .then(UserKycInfo => res.status(201).send(UserKycInfo))
  //     .catch(error => res.status(400).send(error));
  // },
 //  list(req, res) {
 //  	console.log('db>>>>>>>>>>>>>> inside listtt', db.sequelize.options.query)
 //  	console.log('inside listin of controlleerrrrrr')
	//   // return model1
	//     // .findAll({})
	//     sequelize.query("SELECT * FROM `model1`", { type: Sequelize.QueryTypes.SELECT})
	//     .then(UserKycInfo => res.status(200).send(UserKycInfo))
	//     .catch(error => res.status(400).send(error));
	// },

    list(req, res) {
    	console.log('model1111111111', UserKycInfo)
    	sequelize.query("SELECT * FROM usr2s ", { type: sequelize.QueryTypes.SELECT})
  .then(users => {
  	console.log('users>>>>>>>>>>>>>>>>>>>>', users);
    // We don't need spread here, since only the results will be returned for select queries
  })
},
};