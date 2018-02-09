const Usr_kyc_Info = require('../models').usr_kyc_info;
var fs = require('file-system');
var CommonHelper = require('../../_helper');
const createFilePath = __dirname +'/../../../kyc_images/'
// const gDrivekeyFile = require('../../oauth2.keys');
// const {google} = require('googleapis');
// var googleAuth = require('google-auth-library');
// var oauth2Client = new OAuth2(
//   l8gnrh2p79b8s59aao90qksn1gfqag0.apps.googleusercontent.com,
//   AIzaSyCifnnzViLCXpR34l4dAjAQemFZ5qpk-6s,
//   http://localhost:3000
// );
// var drive = google.drive({ version: 'v3', auth: oauth2Client });

// const sampleClient = require('../sampleclient');
// const fs = require('fs');

// const auth = sampleClient.oAuth2Client;

// var google = require('googleapis');
// google-auth-library
// var OAuth2Client = google.auth.OAuth2;
// var CLIENT_ID = gDrivekeyFile.client_id;
// var CLIENT_SECRET = gDrivekeyFile.client_secret;
// var REDIRECT_URL = gDrivekeyFile.redirect_uris;
// var oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
// oauth2Client.setCredentials({
// access_token: identities.google.accessToken
// });

// var drive = google.drive({ version: 'v2', auth: oauth2Client });


module.exports = {
  create(req, res) {
    var data = CommonHelper._getEncryptedKYCData(req.body.data);
     return Usr_kyc_Info
      .create({
        aadharHolder_name: data.aadharHolder_name,
        panHolder_name: data.panHolder_name,
        aadhar_number: data.aadhar_number,
        pan_number: data.pan_number,
        pan_dob: req.body.data.pan_dob,
        pan_filepath: data.pan_filepath,
        aadhar_filepath: data.aadhar_filepath,
        verification_flag: false
      })
      .then(Usr_kyc_Info => res.status(201).send(Usr_kyc_Info))
      .catch(error => res.status(400).send(error));
  },

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

  uploadAadhar(req, res) {
    if (!req.files)
      return res.status(400).send('No files were uploaded.');
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    var fileObject = Object.values(req.files);
    var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
    var aadharfolder_id = {
      "aadharfolder_id": 'user_aadhar'+randomNumberBetween0and19
    }
    // var buf = new Buffer(sampleFile.data, 'base64');
    // let pathOfData = __dirname +'/../../../kyc_images/'+aadharfolder_id.aadharfolder_id
    
    let saveImgfilepath = '/kyc_images/aadhar_'+aadharfolder_id.aadharfolder_id+'.jpg'
    //let filepath = '/home/syncrasy/project/kyc_images/'+aadharfolder_id.aadharfolder_id+'/aadhar.jpg'
    console.log('beforree',fileObject[0].data)
    let base64 = new Buffer(fileObject[0].data, 'base64');
    console.log('afterrrrr',base64)
    fs.writeFile(createFilePath+'/aadhar_'+aadharfolder_id.aadharfolder_id+'.jpg', base64, function(err) {
      if(err) console.log('errrorrr',err )
      console.log('image saved>>>>>>>>>>>>>')
      return res.json({'msg':'aadhar saved successfully', "filepath": saveImgfilepath});
    })
},
     uploadPan(req, res) {
    if (!req.files)
      return res.status(400).send('No files were uploaded.');
    var fileObject = Object.values(req.files);
    var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
    var pan_id = {
      "pan_id": 'user_pan'+randomNumberBetween0and19
    }
     let saveImgfilepath = '/kyc_images/pan_'+pan_id.pan_id+'.jpg'
    //let pathOfData = __dirname +'/../../../kyc_images/'+pan_id.pan_id
    //let filepath = '/home/syncrasy/project/kyc_images/'+pan_id.pan_id+'/pan.jpg'
    let base64 = new Buffer(fileObject[0].data, 'base64');
    fs.writeFile(createFilePath+'/pan_'+pan_id.pan_id+'.jpg', base64,function(err) {
      if(err) console.log('errrorrr',err )
      console.log('image saved>>>>>>>>>>>>>')
      return res.json({'msg':'pan saved successfully', "filepath": saveImgfilepath});
    })
  },

  getKycRecords(req, res) {
    return Usr_kyc_Info
      .findAll({
        where: {
          verification_flag: 'f',
      },
      })
      .then(function (kycRecords) {
        // console.log('before sending in helper',kycRecords)
        // let data = CommonHelper._getDecryptedKYCData(kycRecords);
        // console.log('decryptededeed after selectionnn',data)
        res.status(200).send(kycRecords)
      })
      .catch(error => res.status(400).send(error));
  },

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

  // craetegDriveFolder(req, res) {
  //   var folderId = '16MFOdq424gZ9SN0Xah90O7bGaHouSB9i';
  //   var fileMetadata = {
  //     'name': 'uploadPan',
  //     'mimeType': 'application/vnd.google-apps.folder',
  //     'parents': [folderId]
  //   };
  //   drive.files.create({
  //     resource: fileMetadata,
  //     fields: 'id'
  //   }, function (err, file) {
  //     if (err) {
  //       // Handle error
  //       console.error(err);
  //     } else {
  //       console.log('Folder Id: ', file.id);
  //     }
  //   });
  // },
};