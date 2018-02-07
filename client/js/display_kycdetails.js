import React from 'react';

var data = {
    'aadharHolder_name': 'Rahul singh Sharma',
    'panHolder_name': 'Rahul singh Sharma',
    'aadhar_number': '233456789534',
    'pan_number': '2345678967',
    'pan_dob': '02/03/1992',
    'gross_annual_income': '250000',
    'residential_status': 'INDIAN',
    'city': 'Noida',
    'state': 'UP',
	'pincode': '201301',
	'street_address':'d4/f4 Sctor-58 Noida',
	'mobile_no': '3456785678'
}


export default class DisplayKycDetails extends React.Component {
	constructor(props){
		super(props);
		this.state ={

	    }
		// this.submitKycInfo = this.submitKycInfo.bind(this);
	} 

   	render() {
      return (
		   <div className="col-lg-12 well bankdtlHeight">
		    <h1 className="bankDetailHeading">KYC DETAILS</h1>
			
			<div className="row">
					<table className="table">
					  <tbody>
					    <tr className="hide-bottom">
					      <th className="customkycLayout">DATE OF BIRTH</th>
					      <td>{data.pan_dob}</td>
					      
					    </tr>
					   <tr className="hide-bottom">
					      <th className="customkycLayout">AADHAAR HOLDER NAME</th>
					      <td>{data.aadharHolder_name}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th className="customkycLayout">AADHAAR NUMBER</th>
					      <td>{data.aadhar_number}</td>
					      
					    </tr>

					    <tr className="hide-bottom">
					  		<th className="customkycLayout">PAN HOLDER NAME</th>
					      <td>{data.panHolder_name}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th className="customkycLayout">GROSS ANNUAL INCOME</th>
					      <td>{data.gross_annual_income}</td>
					      
					    </tr>
					    
					    <tr className="hide-bottom">
					      <th className="customkycLayout">STREET ADDRESS</th>
					      <td className="kycStreetAddressLayout">{data.street_address}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th className="customkycLayout">MOBILE NUMBER</th>
					      <td>{data.mobile_no}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th className="customkycLayout">CITY</th>
					      <td>{data.city}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th className="customkycLayout">STATE</th>
					      <td>{data.state}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th className="customkycLayout">PIN CODE</th>
					      <td>{data.pincode}</td>
					    </tr>
					  </tbody>
					</table>
				</div>
			</div>
		);
   	}
}