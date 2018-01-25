var _ = require('lodash');
var bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = {
  _getEncryptedKYCData(req) {
    // var encryptedValues=null;
    var salt = bcrypt.genSaltSync(saltRounds);
    var data = {
      'aadharHolder_name': bcrypt.hashSync(req.aadharHolder_name, salt),
      'panHolder_name': bcrypt.hashSync(req.panHolder_name, salt),
      'aadhar_number': bcrypt.hashSync(req.aadhar_number, salt),  
      'pan_number': bcrypt.hashSync(req.pan_number, salt),
      'pan_filepath': bcrypt.hashSync(req.pan_filepath, salt),  
      'aadhar_filepath': bcrypt.hashSync(req.aadhar_filepath, salt)
    }
    return data;
  },

  _getEncryptedBankData(req) {
    // var encryptedValues=null;
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
};