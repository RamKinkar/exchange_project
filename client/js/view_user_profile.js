import React from 'react';
import DisplayUsrPersonalInfo from './display_usr_personal_info';
import DisplayKycDocuments from './display_kyc_documents';


export default class ViewUserProfile extends React.Component {
	constructor(props){
		super(props);
		this.state = {

	    }
		// this.submitKycInfo = this.submitKycInfo.bind(this);
	} 

   	render() {
      return (
      	
      					
		
		<div className="container viewKycContainer">
			
			    <div className="left-half">
		   			<DisplayUsrPersonalInfo/>
			    </div> 
			    <div className="right-half">
		   			<DisplayKycDocuments />
			    </div>
				<div>
		   			<a href="/view-kycDetails">VIEW KYC</a>
			    </div>
		</div>

		);
   	}
}
