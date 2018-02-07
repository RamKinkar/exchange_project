import React from 'react';

var data = {
    'bank_name': 'HDFC bank',
    'branch_name': 'Sector 18 Noida',
    'account_no': '34566789001234',
    'repeate_account_no': '34566789001234',
    'account_holderName': 'Rahul Sharma',
    'ifsc_code': 'HDFC50001',
    'account_type': 'saving',
    'mobile_no': '9874561230'
}


export default class DisplayBankDetails extends React.Component {
	constructor(props){
		super(props);
		this.state ={

	    }
		// this.submitKycInfo = this.submitKycInfo.bind(this);
	} 

	// submitKyc (pan_filepath,aadhar_filepath) {
	// 	let self = this;
	// 	var data = {
	// 		'aadharHolder_name': this.refs.aadhar_name.value,
	// 		'panHolder_name': this.refs.pan_name.value,
	// 		'aadhar_number': this.refs.aadhar_num.value,
	// 		'pan_number': this.refs.pan_num.value,
	// 		'pan_dob': this.state.panDob,
	// 		'pan_filepath': pan_filepath,
	// 		'aadhar_filepath': aadhar_filepath
	// 	}
	// 	console.log('dadtatat sending object>>>>>>>>>',data)
	// 	axios.post('/api/userKycinfo', {data}).then(function (response) {
	// 	    if(response.data){
	// 	    	self.resetForm();
	// 	    	toastr.success('Saved Successfully','Kyc Information Saved Sucessfully')
	// 	    }
	// 	  }).catch(function (error) {
	// 	    console.log('ereeeeeeeeeor',error);
	// 	    toastr.error('Error',error)
	// 	});
	// }

   	render() {
      return (
		<div className="container">
		   <div className="col-lg-12 well">
		    <h1 className="bankDetailHeading">BANK DETAILS</h1>
			
			<div className="row">
					<table className="table">
        
					  
					  <tbody>
					    <tr className="hide-bottom">
					      <th className="customBankLayout">IFSC CODE</th>
					      <td>{data.ifsc_code}</td>
					      
					    </tr>
					   <tr className="hide-bottom">
					      <th>BANK NAME</th>
					      <td>{data.bank_name}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					  		<th>BRANCH NAME</th>
					      <td>{data.branch_name}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th>ACCOUNT NUMBER</th>
					      <td>{data.account_no}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th>ACCOUNT HOLDER'S NAME</th>
					      <td>{data.account_holderName}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th>REPEAT ACCOUNT NUMBER</th>
					      <td>{data.repeate_account_no}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th>ACCOUNT TYPE</th>
					      <td>{data.account_type}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th>MOBILE NUMBER</th>
					      <td>{data.mobile_no}</td>
					      
					    </tr>
					  </tbody>
					</table>
				</div>
			</div>
		</div>
		);
   	}
}