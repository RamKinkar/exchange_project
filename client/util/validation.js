import React from 'react';
module.exports = {

  //validation for signUp
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
      }else if (data.aadharHolder_name == ""){
          valid = false
          self.setState({
           ErrorMessage: 'Please fill the aadhaar holder name'
         })
      }else if (data.aadhar_number == ""){
        valid = false
        self.setState({
         ErrorMessage: 'Please fill the aadhaar number'
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