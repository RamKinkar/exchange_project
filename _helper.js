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
    var data = {
      'bank_name': crypto.createCipher('aes-256-ctr',key).update(req.bank_name,'utf-8','hex'),
      'branch_name': crypto.createCipher('aes-256-ctr',key).update(req.branch_name,'utf-8','hex'),
      'account_no': crypto.createCipher('aes-256-ctr',key).update(req.account_no,'utf-8','hex'),
      'account_holderName': crypto.createCipher('aes-256-ctr',key).update(req.account_holderName,'utf-8','hex'),
      'ifsc_code': crypto.createCipher('aes-256-ctr',key).update(req.ifsc_code,'utf-8','hex'),
      'account_type': crypto.createCipher('aes-256-ctr',key).update(req.account_type,'utf-8','hex'),
      'mobile_no': crypto.createCipher('aes-256-ctr',key).update(req.mobile_no,'utf-8','hex')
    }
    return data;
  },
};