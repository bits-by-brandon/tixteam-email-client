 /*
  * DatePicker Field Component
  */
import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default React.createClass({
	getInitialState: function() {
		return {
			startDate: moment()
		};
	},
	handleFieldChange(date){
		this.props.handleFieldChange(date)
	},

    render: function() {
		return (
		    <DatePicker
				selected={this.state.startDate}
				onChange={this.handleFieldChange}/>
		);
	}
});
