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
    const userBankDetail = this.props
    return (
		  <div className="col-lg-12 well bankdtlHeight">
  		  <h1 className="bankDetailHeading">BANK DETAILS</h1>
  			<div className="row">
  					<table className="table">
  					  <tbody>
  					    <tr className="hide-bottom">
  					      <th className="customkycLayout">IFSC CODE</th>
  					      <td>{userBankDetail.userBankDetail.ifsc_code}</td>
  					    </tr>
    					   <tr className="hide-bottom">
    					      <th className="customkycLayout">BANK NAME</th>
    					      <td>{userBankDetail.userBankDetail.bank_name}</td>
    					   </tr>
    					    <tr className="hide-bottom">
    					  		<th className="customkycLayout">BRANCH NAME</th>
    					      <td>{userBankDetail.userBankDetail.branch_name}</td>
    					    </tr>
    					    <tr className="hide-bottom">
    					      <th className="customkycLayout">ACCOUNT NUMBER</th>
    					      <td>{userBankDetail.userBankDetail.account_no}</td>
    					    </tr>
    					    <tr className="hide-bottom">
    					      <th className="customkycLayout">ACCOUNT HOLDER'S NAME</th>
    					      <td>{userBankDetail.userBankDetail.account_holderName}</td>
    					    </tr>
    					    <tr className="hide-bottom">
    					      <th className="customkycLayout">REPEAT ACCOUNT NUMBER</th>
    					      <td>{userBankDetail.userBankDetail.account_no}</td>
    					    </tr>
    					    <tr className="hide-bottom">
    					      <th className="customkycLayout">ACCOUNT TYPE</th>
    					      <td>{userBankDetail.userBankDetail.account_type}</td>
    					    </tr>
    					    <tr className="hide-bottom">
    					      <th className="customkycLayout">MOBILE NUMBER</th>
    					      <td>{userBankDetail.userBankDetail.mobile_no}</td>
    					    </tr>
  					  </tbody>
  					</table>
  			</div>
			</div>
	  );
 	}
}
