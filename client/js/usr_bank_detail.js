import React from 'react';
import axios from 'axios';
export default class UsrBankDetail extends React.Component {

    constructor(props){
        super(props);
         this.state ={
    
         }
         this.submitBankInfo = this.submitBankInfo.bind(this);
         //this.Validate = this.validate.bind(this);
    }

    isEmpty(){
        if(this.refs.account_num.value=="" && this.refs.branch_name.value=="" && this.refs.branch_name.value=="" && this.refs.account_num.value=="" && this.refs.account_holder_name.value=="" && this.refs.ifsc_code.value=="" && this.refs.acc_typ.value=="" && this.refs.mob_num.value=="")
        {
        alert('fields cannot be empty');
        return true;
        }

    }

    validate()
    {
        if(this.isEmpty()) {
            alert("Please enter required fields");
        } 
        else{
            var account_num = this.refs.account_num.value;
            var confirm_accnum = this.refs.renter_acc_num.value;
    // var confirm_accnum = document.getElementById("b7").value;
                if (account_num != confirm_accnum)
                {
                    alert("account number do not match.");
                    return false;
                }
                else{
                    return true;
                }
      
            }
    // var account_num = document.getElementById("b5").value;
    }

    submitBankInfo () {
        // boolean check=validate();
        alert("going to chck input text value");
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
                  
                console.log('data>>>>>>>>>>>>>>>>>>>>',data)

                axios.post('/api/userBankDetail', {data}).then(function (response) {
                    console.log('response>>>>>>>>>>>>',response.data);
                  }).catch(function (error) {
                    console.log('ereeeeeeeeeor',error);
                });
            }
            

        else
        {
            console.log('account number not matching');
        }
    }
    render() {
      return (
        <div className="container">
          <h2 align="center">User Bank DETAILS</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="Enter IFSC CODE" className="control-label col-xs-7">IFSC CODE:</label>
                    <div className="col-sm-5 col-sm-offset-1">
                        <input type="text" pattern="^[A-Za-z]{4}\d{7}$" className="form-control" id="b1" ref="ifsc_code" placeholder="HDFC1234567" required/>
                    </div>
                    <label htmlFor="Branch Name" className="control-label col-xs-7">Branch Name:</label>
                    <div className="col-sm-5 col-sm-offset-1">
                        <input type="text" className="form-control" id="b2" ref="branch_name" placeholder="noida" required/>
                    </div>
                     <label htmlFor="Account Type" className="control-label col-xs-7">Account Type:</label>
                    <div className="col-sm-5 col-sm-offset-1">
                        <input type="text" className="form-control" id="b3" ref="acc_typ" placeholder="SAVING/CURRENT" required/>
                    </div>   
                     <label htmlFor="enter bank name" className="control-label col-xs-7">Enter Bank Name:</label>
                    <div className="col-sm-5 col-sm-offset-1">
                        <input type="text" className="form-control" id="b4" ref="bank_name" placeholder="HDFC" required/>
                     </div>
                     
                  
                    <label htmlFor="enter account number" className="control-label col-xs-7">Enter the Account Number:</label>
                    <div className="col-sm-5 col-sm-offset-1">
                        <input type="text" className="form-control" id="b5" ref="account_num" placeholder="1234567" required/>
                    </div>
                    <label htmlFor="enter the account holder name" className="control-label col-xs-7">Enter the Account Holder Name:</label>
                    <div className="col-sm-5 col-sm-offset-1">
                        <input type="text" className="form-control" id="b6"  ref="account_holder_name" placeholder="JOHN DOE" required/>
                    </div>
                    <label htmlFor="re-enter the account number" className="control-label col-xs-7">Re-enter the Account Number:</label>
                    <div className="col-sm-5 col-sm-offset-1">
                        <input type="text" className="form-control" id="b7"  ref="renter_acc_num" placeholder="111122223333" required/>
                    </div>
                    <label htmlFor="enter mobile number" className="control-label col-xs-7">Enter Mobile Number:</label>
                                <div className="col-sm-5 col-sm-offset-1">
                                <input type="text" pattern="^\d{10}$" className="form-control" id="b8" ref="mob_num" placeholder="1234567894" required/>
                                </div>
                    <label htmlFor="submit" className="control-label col-xs-1"></label>
                                <div className="col-sm-3 col-sm-offset-1">
                        <input type="submit" value="save" className="form-control" id="b8"   onClick={this.submitBankInfo} />
                                </div>
                </div>
            </form>
        </div>
       
      );
    }
}