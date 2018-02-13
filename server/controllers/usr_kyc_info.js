const Usr_kyc_Info = require('../models').usr_kyc_info;
var fs = require('file-system');
var CommonHelper = require('../../_helper');
const createFilePath = __dirname +'/../../../kyc_images/'

module.exports = {
  // method for creating the kycDetails  of user
  create(req, res) {
    var data = CommonHelper._getEncryptedKYCData(req.body.data);
     return Usr_kyc_Info
      .create({
        aadhaarHolder_name: data.aadhaarHolder_name,
        panHolder_name: data.panHolder_name,
        aadhaar_number: data.aadhaar_number,
        pan_number: data.pan_number,
        pan_dob: req.body.data.pan_dob,
        pan_filepath: data.pan_filepath,
        aadhaar_front_filepath: data.aadhaar_front_filepath,
        aadhaar_back_filepath: data.aadhaar_back_filepath,
        gross_annual_income: data.gross_annual_income,
        residential_status: data.residential_status,
        street_address: data.street_address,
        city: data.city,
        state: data.state,
        pin_code: data.pin_code,
        verification_flag: false,
        exchange_user_id: '4'
      })
      .then(Usr_kyc_Info => res.status(201).send(Usr_kyc_Info))
      .catch(error => res.status(400).send(error));
  },

//method for deleting the kyc information based on the id
  destroy(req, res) {
    return Usr_kyc_Info
      .findById(req.query.id)
      .then(userinfo => {
        if (!userinfo) {
          return res.status(400).send({
            message: 'Record Not Found',
          });
        }
        return Usr_kyc_Info
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      }).catch(error => res.status(400).send(error));
  },

// method for  uploading the aadhaar_front for the user kyc
  uploadAadharFront(req, res) {
    if (!req.files)
      return res.status(400).send('No files were uploaded.');
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    var fileObject = Object.values(req.files);
    var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
    var aadharfolder_id = {
      "aadharfolder_id": 'user_aadhar'+randomNumberBetween0and19
    }
    let saveImgfilepath = '/kyc_images/aadhar_front_'+aadharfolder_id.aadharfolder_id+'.jpg'
    let base64 = new Buffer(fileObject[0].data, 'base64');
    fs.writeFile(createFilePath+'/aadhar_front_'+aadharfolder_id.aadharfolder_id+'.jpg', base64, function(err) {
      if(err) console.log('errrorrr',err )
      console.log('image saved>>>>>>>>>>>>>')
      return res.json({'msg':'aadhar front saved successfully', "filepath": saveImgfilepath});
    })
  },

// method for  uploading the aadhaar_back for the user kyc
  uploadAadharBack(req, res) {
    if (!req.files)
      return res.status(400).send('No files were uploaded.');
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    var fileObject = Object.values(req.files);
    var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
    var aadharfolder_id = {
      "aadharfolder_id": 'user_aadhar'+randomNumberBetween0and19
    }
    let saveImgfilepath = '/kyc_images/aadhar_back_'+aadharfolder_id.aadharfolder_id+'.jpg'
    let base64 = new Buffer(fileObject[0].data, 'base64');
    fs.writeFile(createFilePath+'/aadhar_back_'+aadharfolder_id.aadharfolder_id+'.jpg', base64, function(err) {
      if(err) console.log('errrorrr',err )
      console.log('image saved>>>>>>>>>>>>>')
      return res.json({'msg':'aadhar back saved successfully', "filepath": saveImgfilepath});
    })
  },

  // method to upload the pan of user
  uploadPan(req, res) {
    if (!req.files)
      return res.status(400).send('No files were uploaded.');
    var fileObject = Object.values(req.files);
    var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
    var pan_id = {
      "pan_id": 'user_pan'+randomNumberBetween0and19
    }
    let saveImgfilepath = '/kyc_images/pan_'+pan_id.pan_id+'.jpg'
    let base64 = new Buffer(fileObject[0].data, 'base64');
    fs.writeFile(createFilePath+'/pan_'+pan_id.pan_id+'.jpg', base64,function(err) {
      if(err) console.log('errrorrr',err )
      console.log('image saved>>>>>>>>>>>>>')
      return res.json({'msg':'pan saved successfully', "filepath": saveImgfilepath});
    })
  },

//method for getting all the kyc information on the basis of unverified user for admin panel
  getKycRecords(req, res) {
    return Usr_kyc_Info
      .findAll({
        where: {
          verification_flag: 'f',
      },
      })
      .then(function (kycRecords) {
        res.status(200).send(kycRecords)
      })
      .catch(error => res.status(400).send(error));
  },

// method for approved the kyc of user on the basis of id
  verifyKyc(req, res) {
    return Usr_kyc_Info
    .findById(req.query.id, {
        where: {
          id: req.query.id,
      },
    })
    .then(kycRecord => {
      if (!kycRecord) {
        return res.status(404).send({
          message: 'kycRecord Not Found',
        });
      }
      return kycRecord
        .update({
          verification_flag: req.body.verification_flag,
        })
        .then(() => res.status(200).send(kycRecord))  // Send back the updated todo.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },

// method for fetching the single user kyc records on the basis of  user id
  getUserKycDetailById(req, res) {
    return Usr_kyc_Info
      .findAll({
          where: {
            exchange_user_id: req.query.id,
        },
      })
      .then(function (kycRecord) {
        res.status(200).send(kycRecord)
      })
      .catch(error => res.status(400).send(error));
  },

};
