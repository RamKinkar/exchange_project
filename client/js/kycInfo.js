import React from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone'
import {toastr} from 'react-redux-toastr'
import ImageUpload from './uploadImage';
import DatePickerComponent from './datepicker';
import Validate from '../util/validation';

export default class KycInfo extends React.Component {
	constructor(props){
		super(props);
		this.state ={
	      file:null,
	      image: '',
	      pan_filepath: '',
	      aadhar_front_filepath: '',
	      aadhar_back_filepath: '',
	      aadhaarFrontObject: null,
	      aadharBackObject: null,
	      panObject: null,
	      panDob: null,
	      ErrorMessage: ''
	  }
		this.submitKycInfo = this.submitKycInfo.bind(this);
		this.storeAadhaarFrontData = this.storeAadhaarFrontData.bind(this);
		this.storeAadhaarBackData = this.storeAadhaarBackData.bind(this);
		this.storePanData = this.storePanData.bind(this);
		this.setPanDob = this.setPanDob.bind(this);
	}

	submitKycInfo () {
		this.uploadPan();
	}

	setPanDob(panDob) {
		this.setState({
			panDob: panDob
		})
	}

	submitKyc (pan_filepath,aadhaar_front_filepath,aadhaar_back_filepath) {
		let self = this;
		let data = {
			'aadhaarHolder_name': this.refs.aadhar_name.value,
			'panHolder_name': this.refs.pan_name.value,
			'aadhaar_number': this.refs.aadhar_num.value,
			'pan_number': this.refs.pan_num.value,
			'pan_dob': this.state.panDob,
			'pan_filepath': pan_filepath,
			'aadhaar_front_filepath': aadhaar_front_filepath,
			'aadhaar_back_filepath': aadhaar_back_filepath,
			'gross_annual_income': this.refs.gross_income.value,
			'residential_status': this.refs.residetntial_status.value,
			'street_address': this.refs.street_address.value,
			'city': this.refs.city.value,
			'state': this.refs.state.value,
			'pin_code': this.refs.pincode.value
		}
		if(Validate._validateKycFormField(data, this.state.ErrorMessage, self)){
			axios.post('/api/userKycinfo', {data}).then(function (response) {
			    if(response.data){
			    	self.resetForm();
			    	toastr.success('Saved Successfully','Kyc Information Saved Sucessfully')
			    	self.props.history.push('/bankDetails')
			    }
			  }).catch(function (error) {
			    console.log('ereeeeeeeeeor',error);
			    toastr.error('Error',error)
			});
		}
	}

	resetForm () {
		this.refs.aadhar_name.value =  '',
		this.refs.pan_name.value =  '',
		this.refs.aadhar_num.value =  '',
		this.refs.pan_num.value =  ''
	}


	uploadAadharFront (pan_filepath) {
		let self = this
		if(Validate._validateAadhaarFront(this.state.aadhaarFrontObject, this.state.ErrorMessage, self)){
			axios.post('/api/uploadAadharFront',this.state.aadhaarFrontObject).then(function (response) {
			    self.setState({
			    	aadhar_front_filepath: response.data.filepath
			    })
				self.uploadAadharBack(pan_filepath,self.state.aadhar_front_filepath)
			  }).catch(function (error) {
			    console.log('ereeeeeeeeeor',error);
			});
		}
	}

	uploadAadharBack (pan_filepath,aadhar_front_filepath) {
		let self = this
		if(Validate._validateAadhaarBack(this.state.aadharBackObject, this.state.ErrorMessage, self)){
			axios.post('/api/uploadAadharBack',this.state.aadharBackObject).then(function (response) {
					self.setState({
						aadhar_back_filepath: response.data.filepath
					})
				self.submitKyc(pan_filepath,aadhar_front_filepath,self.state.aadhar_back_filepath)
				}).catch(function (error) {
					console.log('ereeeeeeeeeor',error);
			});
		}
	}

	storeAadhaarFrontData(file) {
		let self = this
		self.setState({
			aadhaarFrontObject: file
		})
	}

	storeAadhaarBackData(file) {
		let self = this
		self.setState({
			aadharBackObject: file
		})
	}

	storePanData(file) {
		let self = this
		self.setState({
			panObject: file
		})
	}

	uploadPan () {
		let self = this
		if(Validate._validatePan(this.state.panObject, this.state.ErrorMessage, self)){
			axios.post('/api/uploadPan', this.state.panObject).then(function (response) {
			    self.setState({
			    	pan_filepath: response.data.filepath
			    })
				if(self.state.pan_filepath){
					self.uploadAadharFront(self.state.pan_filepath);
				}
			  }).catch(function (error) {
			    console.log('ereeeeeeeeeor',error);
			});
		}
	}


 	render() {
 		let error = "";
    if(this.state.ErrorMessage){
     error = <span className="text-center"><p>{this.state.ErrorMessage}</p></span>
    }
    return (
			<div className="container">
				  <h1 className="well">KYC Form</h1>
					<div className="col-lg-12 well">
						<div className="row">
							<form>
								{error}
								<div className="col-sm-12">
									<div className="row">
										<div className="col-sm-6 form-group">
											<label>Pan Holder Name</label>
											<input type="text" ref="pan_name" placeholder="Enter Pan Holder Name.." className="form-control"/>
										</div>
										<div className="col-sm-6 form-group">
											<label>Pan Number</label>
											<input type="text" ref="pan_num" placeholder="Enter Pan Number Here.." className="form-control"/>
										</div>
									</div>
									<div className="form-group">
										<label>Upload Pan</label>
										<ImageUpload uploadImages = {this.storePanData} name='image' value={this.state.image} ref='panImage' icon='Upload Pan'/>
									</div>
									<div className="form-group">
										<label>Pan DOB</label>
										<DatePickerComponent panDob={this.setPanDob}/>
									</div>
									<div className="row">
										<div className="col-sm-6 form-group">
											<label>Aadhar Holder Name</label>
											<input type="text" ref="aadhar_name" placeholder="Enter Aadhar Name here" className="form-control"/>
										</div>
										<div className="col-sm-6 form-group">
											<label>Aadhar Number</label>
											<input type="text" ref="aadhar_num" placeholder="Enter Aadhar Number Here.." className="form-control"/>
										</div>
									</div>
									<div className="row">
									<div className="col-sm-6 form-group">
										<label>Upload Aadhar Front</label>
										<ImageUpload uploadImages = {this.storeAadhaarFrontData} name='image' value={this.state.image} icon='Upload Pan'/>
									</div>
									<div className="col-sm-6 form-group">

										<label>Upload Aadhar Back</label>
										<ImageUpload uploadImages = {this.storeAadhaarBackData} name='image' value={this.state.image} icon='Upload Pan'/>
								</div>
									</div>
									<div className="row">
										<div className="col-sm-6 form-group">
											<label>Gross Annual Income</label>
											<input type="text" ref="gross_income" required placeholder="Enter the annual income" className="form-control"/>
										</div>
										<div className="col-sm-6 form-group">
											<label>Residential Status</label>
											<input type="text" ref="residetntial_status" placeholder="Enter the residential status" required className="form-control"/>
										</div>
									</div>
									<div className="row">
										<div className="col-sm-6 form-group">
											<label>Street Address</label>
											<input type="text" ref="street_address" placeholder="Enter Street Address" required className="form-control"/>
										</div>
										<div className="col-sm-6 form-group">
											<label>City</label>
											<input type="text" ref="city" placeholder="Enter the city"  required className="form-control"/>
										</div>
									</div>
									<div className="row">
										<div className="col-sm-6 form-group">
											<label>State</label>
											<input type="text" ref="state" placeholder="Enter  the state" required="field cant be empty" className="form-control"/>
										</div>
										<div className="col-sm-6 form-group">
											<label>Pincode</label>
											<input type="text" ref="pincode" placeholder="Enter the pincode" required="field cant be empty" className="form-control"/>
										</div>
									</div>
								<button type="button" onClick = {this.submitKycInfo} className="btn btn-lg btn-info">Submit</button>
								</div>
							</form>
						</div>
					</div>
			</div>
	);
 	}
}
