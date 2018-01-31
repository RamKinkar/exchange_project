import React from 'react';
import ProjectRouter from './projectRouter';
import ReduxToastr from 'react-redux-toastr'

class App extends React.Component {
   render() {
      return (
         <div>
            <ProjectRouter/>
            <ReduxToastr
	          timeOut={3000}
	          newestOnTop={false}
	          preventDuplicates
	          position="top-right"
	          transitionIn= 'bounceIn'
	          transitionOut= 'bounceOut'
	          progressBar
	        />
         </div>
      );
   }
}
export default App;