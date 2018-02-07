import React from 'react';
import axios from 'axios';
import {toastr} from 'react-redux-toastr'
import ImageUpload from './uploadImage';

export default class UsrBankDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.submitBankInfo = this.submitBankInfo.bind(this);
        this.storeBankData = this.storeBankData.bind(this);
    }

    storeBankData(file) {
        let self = this
        self.setState({
            aadharObject: file
        })
    }

    isEmpty() {
        if (this.refs.account_num.value == "" && this.refs.branch_name.value == "" && this.refs.branch_name.value == "" && this.refs.account_num.value == "" && this.refs.account_holder_name.value == "" && this.refs.ifsc_code.value == "" && this.refs.acc_typ.value == "" && this.refs.mob_num.value == "") {
            alert('fields cannot be empty');
            return true;
        }

    }

    validate() {
        if (this.isEmpty()) {
            alert("Please enter required fields");
        } else {
            var account_num = this.refs.account_num.value;
            var confirm_accnum = this.refs.renter_acc_num.value;
            if (account_num != confirm_accnum) {
                alert("account number do not match.");
                return false;
            } else {
                return true;
            }

        }
    }
    submitBankInfo () {
        let self = this;
        let validateAccount=this.validate();
        if(validateAccount)
        {
            var data = {
                'bank_name': this.refs.bank_name.value,
                'branch_name': this.refs.branch_name.value,
                'account_no': this.refs.account_num.value,
                'account_holderName': this.refs.account_holder_name.value,
                'ifsc_code': this.refs.ifsc_code.value,
                'account_type': this.refs.acc_typ.value,
                'mobile_no': this.refs.mob_num.value

            }
            axios.post('/api/userBankDetail',{data}).then(function (response) {
                if(response.data){
                    self.resetForm();
                    toastr.success('Saved Successfully','Bank Detail Saved Sucessfully')
                    self.props.history.push('/view-kycDetails')
                }
              }).catch(function (error) {
                console.log('ereeeeeeeeeor',error);
                toastr.error('Error',error)
            });
        }
    }

    resetForm () {
        this.refs.bank_name.value =  '',
        this.refs.branch_name.value =  '',
        this.refs.account_num.value =  '',
        this.refs.account_holder_name.value =  '',
        this.refs.ifsc_code.value =  '',
        this.refs.acc_typ.value =  ''
        this.refs.mob_num.value =  ''
    }   
    uploadPan () {
        let self = this
        axios.post('/api/uploadPan', this.state.panObject).then(function (response) {
            self.setState({
                pan_filepath: response.data.filepath
            })
            if(self.state.pan_filepath){
                self.uploadAadhar(self.state.pan_filepath);         
            }
          }).catch(function (error) {
            console.log('ereeeeeeeeeor',error);
        });
    }


    render() {
      return (
       <div className="container">
            <h1 className="well">BANK DETAILS</h1>
            <div className="col-lg-12 well">
                <div className="row">
                    <form>
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-6 form-group">
                                    <label>IFSC CODE:</label>
                                    <input type="text" ref="ifsc_code" placeholder="HDFC1234567" required="field can't be empty" className="form-control"/>
                                </div>
                                <div className="col-sm-6 form-group">
                                    <label>Branch Name</label>
                                    <input type="text" ref="branch_name" placeholder="Noida"required="field can't be empty" className="form-control"/>
                                </div>

                            </div>  
                              <div className="row">
                                <div className="col-sm-6 form-group">
                                    <label> Account Type</label>
                                    <input type="text" ref="acc_typ" placeholder="Saving/current" required="field can't be empty" className="form-control"/>
                                </div>
                                <div className="col-sm-6 form-group">
                                    <label>Bank Name</label>
                                    <input type="text" ref="bank_name" placeholder="HDFC" required="field can't be empty" className="form-control"/>
                                </div>
                            </div> 
                                 <div className="row">
                                <div className="col-sm-6 form-group">
                                    <label>Account Holder Name</label>
                                    <input type="text" ref="account_holder_name" placeholder="JOHN DOE" required="field can't be empty" className="form-control"/>
                                </div>
                                <div className="col-sm-6 form-group">
                                    <label>account Number</label>
                                    <input type="text" ref="account_num" placeholder="1234567"required="field can't be empty" className="form-control"/>
                                </div>
                            </div>  
                                 <div className="row">
                                <div className="col-sm-6 form-group">
                                    <label>Re-enter The AccountNumber</label>
                                    <input type="text" ref="renter_acc_num" placeholder="1234567" required="field can't be empty" className="form-control"/>
                                </div>
                                <div className="col-sm-6 form-group">
                                    <label>Mobile Number</label>
                                    <input type="text" pattern="^\d{10}$" ref="mob_num" placeholder="Enter Pan Number Here.."required="field can't be empty" className="form-control"/>
                                </div>
                            </div>
                            </div>   
                               <div>
                                <div className="row">
                                <div className="col-sm-6 form-group">
                                <label>Upload Bank Details</label>
                                <ImageUpload uploadImages = {this.storeBankData} name='image' value={this.state.image} ref='panImage' icon='Upload Pan'/>
                            </div> 
                            </div> 
                            </div>
                                 <div className="col-md-12 center-block" >
                                 <input type="submit" value="save" className="btn btn-primary center-block" id="b8"   onClick={this.submitBankInfo} />
                                </div>
                    </form> 
                </div>
            </div>
        </div>
        
      );
    }
}