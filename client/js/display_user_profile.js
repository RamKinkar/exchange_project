import React from 'react';

var data = {
    'name': 'syncrasy',
    'email': 'syncrasy@gmail.com',
    'mobile': '8876543267',
    'id': '2',
   
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
		   <div className="col-lg-5 well">
		    <h1 className="bankDetailHeading"></h1>
			
			<div className="row">
					<table className="table">
        
					  
					  
					    <tr className="hide-bottom">
					      <th>NAME</th>
					      <td>{data.name}</td>
					      
					    </tr>
					   <tr className="hide-bottom">
					      <th>EMAIL</th>
					      <td>{data.email}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					  		<th>ID</th>
					      <td>{data.id}</td>
					      </tr>
					      
					    
					  
					</table>
					</div>
				</div>
			
			
			 <div className="container1">
		   <div className="col-lg-13 well">
		    <h1 className="bankDetailHeading"></h1>
			
			<div className="row">
					<table className="table">
        
					  
					  
					    <tr className="hide-bottom">
					      <th>NAME</th>
					      <td>{data.name}</td>
					      
					    </tr>
					   <tr className="hide-bottom">
					      <th>EMAIL</th>
					      <td>{data.email}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					  		<th>ID</th>
					      <td>{data.id}</td>
					      </tr>
					      
					    
					  
					</table>
					</div>
				</div>
			</div> 
			</div>
					
		);
   	}
}