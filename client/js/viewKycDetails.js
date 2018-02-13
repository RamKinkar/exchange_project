import React from 'react';
import axios from 'axios';
import CommonHelper from '../util/common_helper';
import DisplayKycDetails from './display_kycdetails';
import DisplayBankDetails from './display_bankdetails';


export default class ViewKycDetails extends React.Component {
	constructor(props){
		super(props);
		this.state = {
				userKycDetail: null,
				userBankDetail: null
	    }
		// this.submitKycInfo = this.submitKycInfo.bind(this);
	}

	componentWillMount(nextProps) {
 	}

	componentDidMount() {
		this.getKycDetailsOfUser()
		this.getBankDetailsOfUser()
	}

// method for get user kyc detail from db
	getKycDetailsOfUser(){
		let self = this
		let exchange_user_id = this.props.location.state.exchange_user_id
		axios.get('/api/getUserKycDetail?id='+exchange_user_id).then(function (response) {
			if(response.data){
					// self.resetForm();
					let decryptedData = CommonHelper._getDecryptedKYCData(response.data);
					self.setState({
						userKycDetail: decryptedData[0]
					})
			}
			}).catch(function (error) {
				console.log('ereeeeeeeeeor',error);
		});
	}

	// method for get user Bank detail from db
	getBankDetailsOfUser() {
		let self = this
		let exchange_user_id = this.props.location.state.exchange_user_id
		axios.get('/api/getKycBankDetail?id='+exchange_user_id).then(function (response) {
			if(response.data){
					// self.resetForm();
					let decryptedData = CommonHelper._getDecryptedBankData(response.data);
					self.setState({
						userBankDetail: decryptedData[0]
					})
			}
			}).catch(function (error) {
				console.log('ereeeeeeeeeor',error);
				// toastr.error('Error',error)
		});
	}

 	render() {
		let bnkdtls = this.state.userBankDetail ? <DisplayBankDetails userBankDetail={this.state.userBankDetail}/>:'No bank details found'
		let kycdetails = this.state.userKycDetail ? <DisplayKycDetails userKycDetail={this.state.userKycDetail}/>:'No kyc details found'
    return (
			<div className="container viewKycContainer">
		    <div className="left-half">
	   			{kycdetails}
		    </div>
		    <div className="right-half">
	   			{bnkdtls}
		    </div>
			</div>
		);
 	}
}
