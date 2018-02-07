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

   	render() {
      return (
		   <div className="col-lg-12 well bankdtlHeight">
		    <h1 className="bankDetailHeading">BANK DETAILS</h1>
			
			<div className="row">
					<table className="table">
        
					  
					  <tbody>
					    <tr className="hide-bottom">
					      <th className="customkycLayout">IFSC CODE</th>
					      <td>{data.ifsc_code}</td>
					      
					    </tr>
					   <tr className="hide-bottom">
					      <th className="customkycLayout">BANK NAME</th>
					      <td>{data.bank_name}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					  		<th className="customkycLayout">BRANCH NAME</th>
					      <td>{data.branch_name}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th className="customkycLayout">ACCOUNT NUMBER</th>
					      <td>{data.account_no}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th className="customkycLayout">ACCOUNT HOLDER'S NAME</th>
					      <td>{data.account_holderName}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th className="customkycLayout">REPEAT ACCOUNT NUMBER</th>
					      <td>{data.repeate_account_no}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th className="customkycLayout">ACCOUNT TYPE</th>
					      <td>{data.account_type}</td>
					      
					    </tr>
					    <tr className="hide-bottom">
					      <th className="customkycLayout">MOBILE NUMBER</th>
					      <td>{data.mobile_no}</td>
					      
					    </tr>
					  </tbody>
					</table>
				</div>
			</div>
		);
   	}
}