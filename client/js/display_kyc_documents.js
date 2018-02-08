import React from 'react';

var data = {
    'pan_card'   : 'pan_card.jpg',
    'aadhar_card': 'aadhar_card.jpg',
    'photograph' : 'syncrasy.jpg',
    
   
}


export default class DisplayKycDocuments extends React.Component {
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
      	<div className="col-lg-12 well bankdtlHeight">
		 <h1 className="bankDetailHeading">KYC DOCUMENTS</h1>
			
		   	<div className="row">
					<table className="table">
        
					  
					  
					    <tr className="hide-bottom">
					      <th>PAN CARD</th>
					   	<td>{data.pan_card}</td>
					      
					     </tr>
					     
					     	<tr className="hide-bottom">
					      	<th>AADHAR CARD</th>
					      	<td>{data.aadhar_card}</td>
					     	</tr>
					        <tr className="hide-bottom">
					      	<th>PHOTOGRAPH</th>
					      	<td>{data.photograph}</td>
					       </tr>
					    	
				    </table>
		</div>
		   
		</div>
					
		);
   	}
}