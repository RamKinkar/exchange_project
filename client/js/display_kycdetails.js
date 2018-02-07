import React from 'react';

var data = {
    'aadharHolder_name': 'Rahul Sharma',
    'panHolder_name': 'Rahul Sharma',
    'aadhar_number': '233456789534',
    'pan_number': '2345678967',
    'pan_dob': '02/03/1992',
    'gross_annual_income': '250000',
    'residential_status': 'INDIAN',
    'residential_state': 'Uttar Pradesh',
    'city': 'Noida',
	'pincode': '201301',
	'street_address':'d4/f4 Sctor-58 Noida nera abcd fjfjffjjf jgjgjgkglkg',
	'mobile_no': '3456785678'
}


export default class DisplayKycDetails extends React.Component {
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
					      <th>DATE OF BIRTH</th>
					      <td>{data.pan_dob}</td>
					      
					    </tr>
					   <tr className="hide-bottom">
					      <th>AADHAAR HOLDER NAME</th>
					      <td>{data.aadharHolder_name}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th>AADHAAR NUMBER</th>
					      <td>{data.aadhar_number}</td>
					      
					    </tr>

					    <tr className="hide-bottom">
					  		<th>PAN HOLDER NAME</th>
					      <td>{data.panHolder_name}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th>GROSS ANNUAL INCOME</th>
					      <td>{data.gross_annual_income}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th>RESIDENTIALS STATUS</th>
					      <td>{data.residential_status}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th>STREET ADDRESS</th>
					      <td>{data.street_address}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th>MOBILE NUMBER</th>
					      <td>{data.mobile_no}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th>CITY</th>
					      <td>{data.city}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th>STATE</th>
					      <td>{data.state}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th>PIN CODE</th>
					      <td>{data.pincode}</td>
					      
					    </tr>
					  </tbody>
					</table>
				</div>
			</div>
		</div>
		);
   	}
}