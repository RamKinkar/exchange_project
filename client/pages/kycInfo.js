import React from 'react';

export default class KycInfo extends React.Component {
   render() {
      return (
		<div className="container">
		  <h2 align="left">KYC DETAILS</h2>
		  	<form>
		     	<div className="form-group">
				    <label htmlFor="input pannumber" className="control-label col-xs-2">PAN NUMBER:</label>
				    <div className="col-xs-10">
				        <input type="text" className="form-control" id="n1" placeholder="ABCD1234G" required/>
				    </div>
				</div>
			    <button className="btn btn-primary" type="submit" >
			        save</button>
		  	</form>
		</div>
      );
   }
}