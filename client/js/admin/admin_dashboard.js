import React from 'react'
import axios from 'axios';
import CommonHelper from '../../util/common_helper';

export default class AdminDashboard extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      kycRecords : []
	    };
	    this.verifyKyc = this.verifyKyc.bind(this)
	}

	componentDidMount(){
		this.getKycRecords()
	}

	getKycRecords() {
		let self = this;
		axios.get('/api/getKycRecords').then(function (response) {
			let encryptedData = CommonHelper._getDecryptedKYCData(response.data);
			self.setState({
				kycRecords: encryptedData
			})
		  }).catch(function (error) {
		    console.log('ereeeeeeeeeor',error);
		});
	}

	verifyKyc(id){
		let self = this;
		var verification_flag = document.getElementById(id).checked?1:0
		axios.post('/api/verifyKyc?id='+id,{verification_flag}).then(function (response) {
			if(response.data){
				self.getKycRecords()
			}
			// self.setState({
			// 	kycRecords: response.data
			// })
		  }).catch(function (error) {
		    console.log('ereeeeeeeeeor',error);
		});
	}

	render () {
	    return (
	        <div className="layout">
		        <div className="container cstm_layout_wrapper">
		          <div className="container_box">
		            <div className="tbl_left">
		              <h3>User List</h3>
		            </div>
		            <div className="table-responsive">
		              <table className="table mytbl">
		                <thead>
		                  <tr>
		                    <th>ID</th>
		                    <th>AadharHolderName</th>
		                    <th>Aadhar Number</th>
		                    <th>PanHolderName</th>
		                    <th>Pan Number</th>
		                    <th>Aadhar Filepath</th>
		                    <th>Pan Filepath</th>
		                    <th>STATUS</th>
		                  </tr>
		                </thead>
		                <tbody>
		                  {this.state.kycRecords.length?this.state.kycRecords.map((result, index)=>{
		                  	let pan = 'file://'+result.pan_filepath
		                  	console.log('pan>>>>>>>>>>',pan)
		                      return(
		                        <tr key={index}>
		                          <td>{result.id}</td>
		                          <td>{result.aadharHolder_name}</td>
		                          <td>{result.aadhar_number}</td>
		                          <td>{result.panHolder_name}</td>
		                          <td>{result.pan_number}</td>
		                          <td><a href={result.aadhar_filepath} type="image/jpg" target="_blank">View Aadhar</a></td>
		                          <td><a href={pan} target="_blank">View Pan</a></td>
		                          <td>
		                            <label className="switch">
		                              <input className="spl_checkbox" type="checkbox" id={result.id} onChange={()=> this.verifyKyc(result.id)}/>
		                              <div className="slider round"></div>
		                            </label>
		                          </td>
		                        </tr>
		                      )
		                    }):<tr><div className="txt_cntr"><b>
		                    No Kyc Records Available!</b></div></tr>}
		                </tbody>
		              </table>
		            </div>
		          </div>
		        </div>
	      	</div>
	    )
  	}
}
