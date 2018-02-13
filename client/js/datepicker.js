import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import '../../node_modules/react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
import '../../node_modules/react-datepicker/dist/react-datepicker-cssmodules.css';

export default class DatePickerComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
    console.log('this.state.startDate', this.state.startDate)
    if(this.state.startDate){
      this.props.panDob(this.state.startDate)
    }
  }

  render() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
    />;
  }
}
