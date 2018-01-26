import React from 'react';

export default class KycInfo extends React.Component {
   render() {
      return (
		<div className="container">
		  <h2 align="center">KYC DETAILS</h2>
		  	<form>
		     	<div className="form-group">
				    <label htmlFor="input pannumber" className="control-label col-xs-2">PAN NUMBER:</label>
				    <div className="col-sm-4 col-sm-offset-1">
				        <input type="text" className="form-control" id="n1" placeholder="ABCD1234G" required/>
				    </div>
				     <label htmlFor="enter pan holder name" className="control-label col-xs-2">PAN NAME:</label>
			        <div className="col-sm-4 col-sm-offset-1">
			            <input type="text" className="form-control" id="p1" placeholder="JOHN DOE" required/>
			         </div>
			         <label htmlFor="enter dob" className="control-label col-xs-2">PAN DOB:</label>
     
		            <div className="col-sm-4 col-sm-offset-1">
		                <input type="date" className="form-control" id="d1" placeholder="01/03/1995" required/>
		            </div>
			         <label htmlFor="upload" className="control-label col-xs-2">UPLOAD PAN:</label>
		            <div className="col-sm-4 col-sm-offset-1">
		                <input type="file" className="form-control" id="i1" required/>
		            </div>
		            <label htmlFor="enter aadhar holder name" className="control-label col-xs-2">AADHAR NAME:</label>
		            <div className="col-sm-4 col-sm-offset-1">
		                <input type="text" className="form-control" id="a1" placeholder="JOHN DOE" required/>
		            </div>
		            <label htmlFor="enter aadhar number" className="control-label col-xs-2">AADHAR NUMBER:</label>
		            <div className="col-sm-4 col-sm-offset-1">
		                <input type="text" className="form-control" id="n2" placeholder="111122223333" required/>
		            </div>
		            <label htmlFor="upload" className="control-label col-xs-2">UPLOAD AADHAR:</label>
		            <div className="col-sm-4 col-sm-offset-1">
		                <input type="file" className="form-control" id="i2" required/>
		            </div>
				</div>
		  	</form>
		  	<button className="btn btn-primary" type="submit" >
			        save</button>
		</div>
      );
   }
}