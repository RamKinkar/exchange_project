var _ = require('lodash');
var crypto = require('crypto');
var key = 'thekeyis%%1234abcdddd4558$khhhn4nnnn';

module.exports = {
  _getDecryptedKYCData(req) {
    console.log('in requesttttt bycrpt in metod helper',req)
    var decryptedRecords = []
     req.map((result,index)=>{
      return decryptedRecords.push({
        'aadharHolder_name': crypto.createCipher('aes-256-ctr',key).update(result.aadharHolder_name,'hex','utf-8'),
        'panHolder_name': crypto.createCipher('aes-256-ctr',key).update(result.panHolder_name,'hex','utf-8'),
        'aadhar_number': crypto.createCipher('aes-256-ctr',key).update(result.aadhar_number,'hex','utf-8'),
        'pan_number': crypto.createCipher('aes-256-ctr',key).update(result.pan_number,'hex','utf-8'),
        'pan_filepath': crypto.createCipher('aes-256-ctr',key).update(result.pan_filepath,'hex','utf-8'),
        'aadhar_filepath': crypto.createCipher('aes-256-ctr',key).update(result.aadhar_filepath,'hex','utf-8'),
        'id': result.id,
        'pan_dob': result.pan_dob,
        'verification_flag': result.verification_flag
      })
    })
    return decryptedRecords;
  },
};