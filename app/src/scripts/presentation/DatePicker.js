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
	handleFieldChange(e){
		this.props.handleFieldChange(this.props.index, e)
	},

    render: function() {
		return (
		    <DatePicker />
		);
	}
});
