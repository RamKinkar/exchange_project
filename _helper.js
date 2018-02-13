var _ = require('lodash');
var bcrypt = require('bcrypt');
var CryptoJS = require("crypto-js");
const saltRounds = 10;
// var cipher = require('cipher')("fishingEagleHippieHatFrisbee");
var crypto = require('crypto');
var key = 'thekeyis%%1234abcdddd4558$khhhn4nnnn';

module.exports = {
  _getEncryptedKYCData(req) {
    var data = {
      'aadhaarHolder_name': crypto.createCipher('aes-256-ctr',key).update(req.aadhaarHolder_name,'utf-8','hex'),
      'panHolder_name': crypto.createCipher('aes-256-ctr',key).update(req.panHolder_name,'utf-8','hex'),
      'aadhaar_number': crypto.createCipher('aes-256-ctr',key).update(req.aadhaar_number,'utf-8','hex'),
      'pan_number': crypto.createCipher('aes-256-ctr',key).update(req.pan_number,'utf-8','hex'),
      'pan_filepath': crypto.createCipher('aes-256-ctr',key).update(req.pan_filepath,'utf-8','hex'),
      'aadhaar_front_filepath': crypto.createCipher('aes-256-ctr',key).update(req.aadhaar_front_filepath,'utf-8','hex'),
      'aadhaar_back_filepath': crypto.createCipher('aes-256-ctr',key).update(req.aadhaar_back_filepath,'utf-8','hex'),
      'gross_annual_income': crypto.createCipher('aes-256-ctr',key).update(req.gross_annual_income,'utf-8','hex'),
      'residential_status': crypto.createCipher('aes-256-ctr',key).update(req.residential_status,'utf-8','hex'),
      'street_address': crypto.createCipher('aes-256-ctr',key).update(req.street_address,'utf-8','hex'),
      'city': crypto.createCipher('aes-256-ctr',key).update(req.city,'utf-8','hex'),
      'state': crypto.createCipher('aes-256-ctr',key).update(req.state,'utf-8','hex'),
      'pin_code': crypto.createCipher('aes-256-ctr',key).update(req.pin_code,'utf-8','hex')
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
      'mobile_no': crypto.createCipher('aes-256-ctr',key).update(req.mobile_no,'utf-8','hex'),
      'bank_filepath': crypto.createCipher('aes-256-ctr',key).update(req.bank_filepath,'utf-8','hex')
    }
    return data;
  },
};
