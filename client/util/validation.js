import React from 'react';
module.exports = {

  //validation for kycDetail
  _validateKycFormField(data, ErrorMessage, self){
    // var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var valid = true
    if (data.panHolder_name == "") {
    valid = false
    self.setState({
     ErrorMessage: 'Please fill the pan name'
    })
    }else if (data.pan_number == "") {
        valid = false
        self.setState({
        ErrorMessage: 'Please fill the pan number'
        })
    }else if (data.pan_dob == null || data.pan_dob == null ) {
        valid = false
        self.setState({
          ErrorMessage: 'Please fill the date of birth'
        })
      }else if (data.aadhaarHolder_name == ""){
          valid = false
          self.setState({
           ErrorMessage: 'Please fill the aadhaar holder name'
         })
      }else if (data.aadhaar_number == ""){
        valid = false
        self.setState({
         ErrorMessage: 'Please fill the aadhaar number'
       })
      }else if (data.gross_annual_income == ""){
        valid = false
        self.setState({
         ErrorMessage: 'Please fill the gross annual income'
       })
      }else if (data.residential_status == ""){
        valid = false
        self.setState({
         ErrorMessage: 'Please fill the residential status'
       })
      }else if (data.street_address == ""){
        valid = false
        self.setState({
         ErrorMessage: 'Please fill the street address'
       })
      }else if (data.city == ""){
        valid = false
        self.setState({
         ErrorMessage: 'Please fill the city'
       })
      }else if (data.state == ""){
        valid = false
        self.setState({
         ErrorMessage: 'Please fill the state'
       })
      }else if (data.pin_code == ""){
        valid = false
        self.setState({
         ErrorMessage: 'Please fill the pincode'
       })
      }
    return valid
  },

  //validation for signUp
  _validatePan(pan_filepath, ErrorMessage, self){
    console.log('pan valid called', pan_filepath)
    console.log('pan valid called', ErrorMessage)
    var valid = true;
    // let self = this;
    if (pan_filepath == null || pan_filepath == "") {
    valid = false;
    self.setState({
     ErrorMessage: 'Please upload the pan image'
    })
    }
    return valid
  },

  _validateAadhaarFront(aadhar_filepath, ErrorMessage, self){
    var valid = true
    // let self = this
    if (aadhar_filepath == null || aadhar_filepath == "" ) {
    valid = false
    self.setState({
     ErrorMessage: 'Please upload the aadhaar front image'
    })
    }
    return valid
  },

  _validateAadhaarBack(aadhar_filepath, ErrorMessage, self){
    var valid = true
    // let self = this
    if (aadhar_filepath == null || aadhar_filepath == "" ) {
    valid = false
    self.setState({
     ErrorMessage: 'Please upload the aadhaar back image'
    })
    }
    return valid
  },

  //validation for BankDetail
  _validateBankFormField(data, ErrorMessage, self){
    var valid = true
    if (data.ifsc_code == "") {
    valid = false
    self.setState({
     ErrorMessage: 'Please fill the ifsc code'
    })
    }else if (data.branch_name == "") {
        valid = false
        self.setState({
        ErrorMessage: 'Please fill the branch name'
        })
    }else if (data.account_type == "" ) {
        valid = false
        self.setState({
          ErrorMessage: 'Please fill the account type'
        })
      }else if (data.bank_name == ""){
          valid = false
          self.setState({
           ErrorMessage: 'Please fill the bank name'
         })
      }else if (data.account_holderName == ""){
        valid = false
        self.setState({
         ErrorMessage: 'Please fill the account holder name'
       })
      }else if (data.account_no == ""){
        valid = false
        self.setState({
         ErrorMessage: 'Please fill the account number'
       })
      }else if (data.confirm_accnum == ""){
        valid = false
        self.setState({
         ErrorMessage: 'Please fill the confirm account number'
       })
      }else if (data.account_no != data.confirm_accnum){
        valid = false
        self.setState({
         ErrorMessage: 'account number and confirm account number should match'
       })
      }else if (data.mobile_no == ""){
        valid = false
        self.setState({
         ErrorMessage: 'Please fill the mobile number'
       })
      }
    return valid
  },

// method to validate the bank slip image
  _validateBankSlip(bank_image, ErrorMessage, self){
    var valid = true
    // let self = this
    if (bank_image == null || bank_image == "" ) {
    valid = false
    self.setState({
     ErrorMessage: 'Please upload the bank slip image'
    })
    }
    return valid
  },

}



// else if(!filter.test(data.email)){
//         valid = false
//         this.setState({
//           ErrorMessage: 'Please fill the Correct email address'
//         })
//       }

// else if (data.password.search(/^(?=.*[A-Z]).+$/) == -1) {
//         valid = false
//         this.setState({
//           ErrorMessage: 'Password must contain one upper case character'
//         })
//       }
