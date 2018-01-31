var _ = require('lodash');
var bcrypt = require('bcrypt');
var CryptoJS = require("crypto-js");
const saltRounds = 10;
// var cipher = require('cipher')("fishingEagleHippieHatFrisbee");
var crypto = require('crypto');
var key = 'thekeyis%%1234abcdddd4558$khhhn4nnnn';

module.exports = {
  // _getEncryptedKYCData(req) {
  //   // var encryptedValues=null;
  //   var salt = bcrypt.genSaltSync(saltRounds);
  //   var data = {
  //     'aadharHolder_name': bcrypt.hashSync(req.aadharHolder_name, salt),
  //     'panHolder_name': bcrypt.hashSync(req.panHolder_name, salt),
  //     'aadhar_number': bcrypt.hashSync(req.aadhar_number, salt),  
  //     'pan_number': bcrypt.hashSync(req.pan_number, salt),
  //     'pan_filepath': bcrypt.hashSync(req.pan_filepath, salt),  
  //     'aadhar_filepath': bcrypt.hashSync(req.aadhar_filepath, salt)
  //   }
  //   return data;
  // },

  _getEncryptedKYCData(req) {
    var data = {
      'aadharHolder_name': crypto.createCipher('aes-256-ctr',key).update(req.aadharHolder_name,'utf-8','hex'),
      'panHolder_name': crypto.createCipher('aes-256-ctr',key).update(req.panHolder_name,'utf-8','hex'),
      'aadhar_number': crypto.createCipher('aes-256-ctr',key).update(req.aadhar_number,'utf-8','hex'),
      'pan_number': crypto.createCipher('aes-256-ctr',key).update(req.pan_number,'utf-8','hex'),
      'pan_filepath': crypto.createCipher('aes-256-ctr',key).update(req.pan_filepath,'utf-8','hex'),
      'aadhar_filepath': crypto.createCipher('aes-256-ctr',key).update(req.aadhar_filepath,'utf-8','hex')
    }
    return data;
  },

  _getEncryptedBankData(req) {
    var salt = bcrypt.genSaltSync(saltRounds);
    var data = {
      'bank_name': bcrypt.hashSync(req.bank_name, salt),
      'branch_name': bcrypt.hashSync(req.branch_name, salt),
      'account_no': bcrypt.hashSync(req.account_no, salt),  
      'account_holderName': bcrypt.hashSync(req.account_holderName, salt),
      'ifsc_code': bcrypt.hashSync(req.ifsc_code, salt),  
      'account_type': bcrypt.hashSync(req.account_type, salt),
      'mobile_no': bcrypt.hashSync(req.mobile_no, salt)
    }
    return data;
  },

  // _getDecryptedKYCData(req) {
  //   console.log('in requesttttt bycrpt in metod helper',req)
  //   // var salt = bcrypt.genSaltSync(saltRounds);
  //   // var pluck_data = _.pluck(req,"dataValues")
  //   // console.log('pluck_data>>>>>>>>>>>>>Instance>>>>>>>>>>>.',pluck_data)
  //   var decryptedRecords = []
  //   return decryptedRecords = req.map((result,index)=>{
  //     decryptedRecords.push({
  //       'aadharHolder_name': crypto.createCipher('aes-256-ctr',key).update(result.aadharHolder_name,'hex','utf-8'),
  //       'panHolder_name': crypto.createCipher('aes-256-ctr',key).update(result.panHolder_name,'hex','utf-8'),
  //       'aadhar_number': crypto.createCipher('aes-256-ctr',key).update(result.aadhar_number,'hex','utf-8'),
  //       'pan_number': crypto.createCipher('aes-256-ctr',key).update(result.pan_number,'hex','utf-8'),
  //       'pan_filepath': crypto.createCipher('aes-256-ctr',key).update(result.pan_filepath,'hex','utf-8'),
  //       'aadhar_filepath': crypto.createCipher('aes-256-ctr',key).update(result.aadhar_filepath,'hex','utf-8'),
  //       'id': result.id,
  //       'pan_dob': result.pan_dob,
  //       'verification_flag': result.verification_flag
  //     })
  //   })
  //   // return data;
  // },
};