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
      const userKycDetail = this.props
      return (
  		  <div className="col-lg-12 well bankdtlHeight">
  		      <h1 className="bankDetailHeading">KYC DETAILS</h1>
    		    <div className="row">
    		      <table className="table">
    					  <tbody>
    					    <tr className="hide-bottom">
    					      <th className="customkycLayout">DATE OF BIRTH</th>
    					      <td>{userKycDetail.userKycDetail.pan_dob}</td>

    					    </tr>
    					   <tr className="hide-bottom">
    					      <th className="customkycLayout">AADHAAR HOLDER NAME</th>
    					      <td>{userKycDetail.userKycDetail.aadhaarHolder_name}</td>

    					    </tr>
    					    <tr className="hide-bottom">
    					      <th className="customkycLayout">AADHAAR NUMBER</th>
    					      <td>{userKycDetail.userKycDetail.aadhaar_number}</td>

    					    </tr>

    					    <tr className="hide-bottom">
    					  		<th className="customkycLayout">PAN HOLDER NAME</th>
    					      <td>{userKycDetail.userKycDetail.panHolder_name}</td>

    					    </tr>
    					    <tr className="hide-bottom">
    					      <th className="customkycLayout">GROSS ANNUAL INCOME</th>
    					      <td>{userKycDetail.userKycDetail.gross_annual_income}</td>

    					    </tr>

    					    <tr className="hide-bottom">
    					      <th className="customkycLayout">STREET ADDRESS</th>
    					      <td className="kycStreetAddressLayout">{userKycDetail.userKycDetail.street_address}</td>

    					    </tr>
    					    <tr className="hide-bottom">
    					      <th className="customkycLayout">MOBILE NUMBER</th>
    					      <td>{userKycDetail.userKycDetail.mobile_no}</td>

    					    </tr>
    					    <tr className="hide-bottom">
    					      <th className="customkycLayout">CITY</th>
    					      <td>{userKycDetail.userKycDetail.city}</td>

    					    </tr>
    					    <tr className="hide-bottom">
    					      <th className="customkycLayout">STATE</th>
    					      <td>{userKycDetail.userKycDetail.state}</td>

    					    </tr>
    					    <tr className="hide-bottom">
    					      <th className="customkycLayout">PIN CODE</th>
    					      <td>{userKycDetail.userKycDetail.pin_code}</td>
    					    </tr>
    					  </tbody>
    		      </table>
    		    </div>
    		</div>
  		);
   	}
}
