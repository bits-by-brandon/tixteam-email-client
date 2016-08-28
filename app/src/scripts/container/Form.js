 /*
  * Form Component
  */
import React from 'react';

//===================================================
//================ Dependancies =====================
//===================================================
import TextField from '../presentation/TextField.js';
import FullButton from '../presentation/FullButton.js';

export default React.createClass({
	getInitialState() {
		return {
			first: "",
			last: "",
			email: "",
			tickets:[]
		};
	},

	handleFieldChange(e) {
		this.setState({[e.target.name]: e.target.value});
	},

    render: function() {
		return (
			<div className="form">
				<TextField label="First Name" name="first" fieldKey="firstName" value={this.state.firstName} handleFieldChange={this.handleFieldChange} />
				<TextField label="Last Name" name="last" fieldKey="lastName" value={this.state.lastName} handleFieldChange={this.handleFieldChange} />
				<TextField label="Client Email" name="email" fieldKey="email" value={this.state.email} handleFieldChange={this.handleFieldChange} />
				<FullButton label="Add Ticket" handleClick="" handleFieldChange={this.handleFieldChange} />
			</div>
		);
	}
});
