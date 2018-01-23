const Usr_kyc_Info = require('../models').usr_kyc_info;
var fs = require('file-system');

module.exports = {
  create(req, res) {
    return Usr_kyc_Info
      .create({
        aadharHolder_name: req.body.aadharHolder_name,
        panHolder_name: req.body.panHolder_name,
        aadhar_number: req.body.aadhar_number,
        pan_number: req.body.pan_number,
        pan_dob: req.body.pan_dob,
        pan_filepath: req.body.pan_filepath,
        aadhar_filepath: req.body.aadhar_filepath,
        verification_flag: req.body.verification_flag
      })
      .then(Usr_kyc_Info => res.status(201).send(Usr_kyc_Info))
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return Usr_kyc_Info
      .findById(req.query.id)
      .then(todo => {
        if (!todo) {
          return res.status(400).send({
            message: 'Todo Not Found',
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
    let pathOfData = __dirname +'/../../../kyc_aadhar_images/'+aadharfolder_id.aadharfolder_id
    let base64 = new Buffer(fileObject[0].data, 'base64');
    fs.writeFile(pathOfData+'/aadhar.jpg', base64, function(err) {
      if(err) console.log('errrorrr',err )
      console.log('image saved>>>>>>>>>>>>>')
      return res.json({'msg':'image saved successfully'});
    })
  },
};