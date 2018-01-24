const Usr_kyc_Info = require('../models').usr_kyc_info;
var fs = require('file-system');
var _ = require('lodash');
var bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = {
  create(req, res) {
    var encryptedValues=null;
    // var salt = bcrypt.genSaltSync(saltRounds);
    // var hash = bcrypt.hashSync(req.body.aadharHolder_name, salt);
    var myPlaintextPassword = {
      aadharHolder_name: req.body.aadharHolder_name,
      panHolder_name: req.body.panHolder_name,
      aadhar_number: req.body.aadhar_number
    }

    var array_object = Object.values(myPlaintextPassword)
    var array_key = Object.keys(myPlaintextPassword)
    console.log('array_object>>>>>>>>>>',array_object)
    console.log('array_key>>>.>>>>>>>>>>',array_key)
    bcrypt.genSalt(saltRounds, function(err, salt) {
      console.log('salt created>>>>>>>>',salt)
      array_object.map((array_object,index)=>{
        console.log('inside map', array_object[index])
        console.log('======= array index are ======',array_key[index])
            bcrypt.hash(array_object[index],salt, function(err, hash) {
                // Store hash in your password DB.
                if(err) console.log('inside error', err)
                  console.log('key value is ??????????'+ array_key[index]+'=',hash)
                  var keyssssssss = array_key[index]
                  // encryptedValues={[keyssssssss]:hash}
                  obj1 = new Object();
                  obj1 = obj1.add([keyssssssss],hash)
                  console.log('************************************',obj1)
            //   console.log('encrypted values are>>>>>>>>>>>>>', encryptedValues)
                //console.log('hash created>>>>>>>>>>>>>', hash)
               // console.log('splitedddd usededede', hash.split(/[.,\/ -]/))
            });
      })
      
    // bcrypt.hash(`myPlaintextPassword`,salt, function(err, hash) {
    //         // Store hash in your password DB.
    //         if(err) console.log('errrre aa ggyi', err)
    //         console.log('hash created>>>>>>>>>>>>>', hash)
    //       console.log('splitedddd usededede', hash.split(/[.,\/ -]/))
    //     });
    });

     // return Usr_kyc_Info
     //  .create({
     //    aadharHolder_name: req.body.aadharHolder_name,
     //    panHolder_name: req.body.panHolder_name,
     //    aadhar_number: req.body.aadhar_number,
     //    pan_number: req.body.pan_number,
     //    pan_dob: req.body.pan_dob,
     //    pan_filepath: req.body.pan_filepath,
     //    aadhar_filepath: req.body.aadhar_filepath,
     //    verification_flag: req.body.verification_flag
     //  })
     //  .then(Usr_kyc_Info => res.status(201).send(Usr_kyc_Info))
     //  .catch(error => res.status(400).send(error));
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
    let pathOfData = __dirname +'/../../../kyc_images/'+aadharfolder_id.aadharfolder_id
    let filepath = '/home/syncrasy/project/kyc_images/'+aadharfolder_id.aadharfolder_id+'/aadhar.jpg'
    let base64 = new Buffer(fileObject[0].data, 'base64');
    fs.writeFile(pathOfData+'/aadhar.jpg', base64, function(err) {
      if(err) console.log('errrorrr',err )
      console.log('image saved>>>>>>>>>>>>>')
      return res.json({'msg':'aadhar saved successfully', "filepath": filepath});
    })
  },

  uploadPan(req, res) {
    if (!req.files)
      return res.status(400).send('No files were uploaded.');
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    var fileObject = Object.values(req.files);
    var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
    var pan_id = {
      "pan_id": 'user_pan'+randomNumberBetween0and19
    }
    // var buf = new Buffer(sampleFile.data, 'base64');
    let pathOfData = __dirname +'/../../../kyc_images/'+pan_id.pan_id
    let filepath = '/home/syncrasy/project/kyc_images/'+pan_id.pan_id+'/pan.png'
    let base64 = new Buffer(fileObject[0].data, 'base64');
    fs.writeFile(pathOfData+'/pan.png', base64, function(err) {
      if(err) console.log('errrorrr',err )
      console.log('image saved>>>>>>>>>>>>>')
      return res.json({'msg':'pan saved successfully', "filepath": filepath});
    })
  },
};