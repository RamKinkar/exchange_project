var _ = require('lodash');
var bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = {
  _getEncryptedData(req) {
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
};