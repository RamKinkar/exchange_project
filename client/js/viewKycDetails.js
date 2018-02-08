import React from 'react';
import DisplayKycDetails from './display_kycdetails';
import DisplayBankDetails from './display_bankdetails';


export default class ViewKycDetails extends React.Component {
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
		   			<DisplayKycDetails />
			    </div> 
			    <div className="right-half">
		   			<DisplayBankDetails />
			    </div>
			
		</div>
		);
   	}
}



// <section class="container">
//   <div class="left-half">
//     <article>
//       <h1>Left Half</h1>
//       <p>Weekends don't count unless you spend them doing something completely pointless.</p>
//     </article>
//   </div>
//   <div class="right-half">
//     <article>
//       <h1>Right Half</h1>
//       <p>If your knees aren't green by the end of the day, you ought to seriously re-examine your life.</p>
//     </article>
//   </div>
// </section>