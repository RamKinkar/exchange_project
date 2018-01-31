import React from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone'
import {toastr} from 'react-redux-toastr'
import ImageUpload from './uploadImage'

export default class KycInfo extends React.Component {
	constructor(props){
		super(props);
		this.state ={
	      file:null,
	      image: '',
	      pan_filepath: '',
	      aadhar_filepath: ''
	    }
		this.submitKycInfo = this.submitKycInfo.bind(this);
		// this.abc = this.abc.bind(this);
		this.uploadAadhar = this.uploadAadhar.bind(this);
		this.uploadPan = this.uploadPan.bind(this);
		// this.uploadImages = this.uploadImages.bind(this);
	}

	submitKycInfo () {
		var data = {
			'aadharHolder_name': this.refs.aadhar_name.value,
			'panHolder_name': this.refs.pan_name.value,
			'aadhar_number': this.refs.aadhar_num.value,
			'pan_number': this.refs.pan_num.value,
			'pan_dob': this.refs.pan_dob.value,
			'pan_filepath': this.state.pan_filepath,
			'aadhar_filepath': this.state.aadhar_filepath
		}
		console.log('data>>>>>>>>>>>>>>>>>>>>',data)
		axios.post('/api/userKycinfo', {data}).then(function (response) {
		    if(response.data){
		    	toastr.success('Saved Successfully','Kyc Information Saved Sucessfully')
		    }
		  }).catch(function (error) {
		    console.log('ereeeeeeeeeor',error);
		});
	}	


	uploadAadhar (file) {
		let self = this
		console.log('uploadImages>>>>>>>>in callback', file)
		axios.post('/api/uploadAadhar',file).then(function (response) {
		    self.setState({
		    	aadhar_filepath: response.data.filepath
		    })
		  }).catch(function (error) {
		    console.log('ereeeeeeeeeor',error);
		});
	}	

	uploadPan (file) {
		let self = this
		console.log('uploadImages>>>>>>>>in  upload pan inside callback', file)
		axios.post('/api/uploadPan', file).then(function (response) {
		    self.setState({
		    	pan_filepath: response.data.filepath
		    })
		  }).catch(function (error) {
		    console.log('ereeeeeeeeeor',error);
		});
	}


   	render() {
      return (
		<div className="container">
		    <h1 className="well">KYC Form</h1>
			<div className="col-lg-12 well">
				<div className="row">
					<form>
						<div className="col-sm-12">
							<div className="row">
								<div className="col-sm-6 form-group">
									<label>Pan Name</label>
									<input type="text" ref="pan_name" placeholder="Enter Pan Holder Name.." className="form-control"/>
								</div>
								<div className="col-sm-6 form-group">
									<label>Pan Number</label>
									<input type="text" ref="pan_num" placeholder="Enter Pan Number Here.." className="form-control"/>
								</div>
							</div>					
							<div className="form-group">
								<label>Upload Pan</label>
								<ImageUpload uploadImages = {this.uploadPan} name='image' value={this.state.image} icon='Upload Pan'/>
							</div>
							<div className="form-group">
								<label>Pan DOB</label>
								<input type="date" ref="pan_dob" placeholder="01/03/1995" className="form-control"/>
							</div>	
							<div className="row">
								<div className="col-sm-6 form-group">
									<label>Aadhar Name</label>
									<input type="text" ref="aadhar_name" placeholder="Enter Aadhar Name here" className="form-control"/>
								</div>		
								<div className="col-sm-6 form-group">
									<label>Aadhar Number</label>
									<input type="text" ref="aadhar_num" placeholder="Enter Aadhar Number Here.." className="form-control"/>
								</div>	
							</div>
							<div className="form-group">
								<label>Upload Aadhar</label>
								<ImageUpload uploadImages = {this.uploadAadhar} name='image' value={this.state.image} icon='Upload Pan'/>
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