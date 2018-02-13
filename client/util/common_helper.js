var _ = require('lodash');
var crypto = require('crypto');
var key = 'thekeyis%%1234abcdddd4558$khhhn4nnnn';

module.exports = {

  // method for decrypting the kyc details
  _getDecryptedKYCData(req) {
    var decryptedRecords = []
     req.map((result,index)=>{
      return decryptedRecords.push({
        'aadhaarHolder_name': crypto.createCipher('aes-256-ctr',key).update(result.aadhaarHolder_name,'hex','utf-8'),
        'panHolder_name': crypto.createCipher('aes-256-ctr',key).update(result.panHolder_name,'hex','utf-8'),
        'aadhaar_number': crypto.createCipher('aes-256-ctr',key).update(result.aadhaar_number,'hex','utf-8'),
        'pan_number': crypto.createCipher('aes-256-ctr',key).update(result.pan_number,'hex','utf-8'),
        'pan_filepath': crypto.createCipher('aes-256-ctr',key).update(result.pan_filepath,'hex','utf-8'),
        'aadhaar_back_filepath': crypto.createCipher('aes-256-ctr',key).update(result.aadhaar_back_filepath,'hex','utf-8'),
        'aadhaar_front_filepath': crypto.createCipher('aes-256-ctr',key).update(result.aadhaar_front_filepath,'hex','utf-8'),
        'city': crypto.createCipher('aes-256-ctr',key).update(result.city,'hex','utf-8'),
        'gross_annual_income': crypto.createCipher('aes-256-ctr',key).update(result.gross_annual_income,'hex','utf-8'),
        'pin_code': crypto.createCipher('aes-256-ctr',key).update(result.pin_code,'hex','utf-8'),
        'residential_status': crypto.createCipher('aes-256-ctr',key).update(result.residential_status,'hex','utf-8'),
        'state': crypto.createCipher('aes-256-ctr',key).update(result.state,'hex','utf-8'),
        'street_address': crypto.createCipher('aes-256-ctr',key).update(result.street_address,'hex','utf-8'),
        'id': result.id,
        'pan_dob': result.pan_dob,
        'verification_flag': result.verification_flag
      })
    })
    return decryptedRecords;
  },

  // method for decrypting the bank details
  _getDecryptedBankData(req) {
    var decryptedRecords = []
     req.map((result,index)=>{
      return decryptedRecords.push({
        'ifsc_code': crypto.createCipher('aes-256-ctr',key).update(result.ifsc_code,'hex','utf-8'),
        'bank_name': crypto.createCipher('aes-256-ctr',key).update(result.bank_name,'hex','utf-8'),
        'branch_name': crypto.createCipher('aes-256-ctr',key).update(result.branch_name,'hex','utf-8'),
        'account_no': crypto.createCipher('aes-256-ctr',key).update(result.account_no,'hex','utf-8'),
        'account_holderName': crypto.createCipher('aes-256-ctr',key).update(result.account_holderName,'hex','utf-8'),
        'account_type': crypto.createCipher('aes-256-ctr',key).update(result.account_type,'hex','utf-8'),
        'bank_filepath': crypto.createCipher('aes-256-ctr',key).update(result.bank_filepath,'hex','utf-8'),
        'mobile_no': crypto.createCipher('aes-256-ctr',key).update(result.mobile_no,'hex','utf-8'),
        'id': result.id
      })
    })
    return decryptedRecords;
  },
};
