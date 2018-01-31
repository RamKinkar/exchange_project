const Usr_kyc_Info = require('../models').usr_kyc_info;
var fs = require('file-system');
var CommonHelper = require('../../_helper');


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
        aadhar_filepath: data.aadhar_filepath
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
    let pathOfData = __dirname +'/../../../kyc_images/'+aadharfolder_id.aadharfolder_id
    let filepath = '/home/syncrasy/project/kyc_images/'+aadharfolder_id.aadharfolder_id+'/aadhar.jpg'
    console.log('beforree',fileObject[0].data)
    let base64 = new Buffer(fileObject[0].data, 'base64');
    console.log('afterrrrr',base64)
    fs.writeFile(pathOfData+'/aadhar.jpg', base64, function(err) {
      if(err) console.log('errrorrr',err )
      console.log('image saved>>>>>>>>>>>>>')
      return res.json({'msg':'aadhar saved successfully', "filepath": filepath});
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
    let pathOfData = __dirname +'/../../../kyc_images/'+pan_id.pan_id
    let filepath = '/home/syncrasy/project/kyc_images/'+pan_id.pan_id+'/pan.jpg'
    let base64 = new Buffer(fileObject[0].data, 'base64');
    fs.writeFile(pathOfData+'/pan.jpg', base64,function(err) {
      if(err) console.log('errrorrr',err )
      console.log('image saved>>>>>>>>>>>>>')
      return res.json({'msg':'pan saved successfully', "filepath": filepath});
    })
  },
};