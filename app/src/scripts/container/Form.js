 /*
  * Form Component
  */
import React from 'react';

//===================================================
//================ Dependancies =====================
//===================================================
import TextField from '../presentation/TextField.js';
import FullButton from '../presentation/FullButton.js';
import TicketForm from './TicketForm.js';

export default React.createClass({
	getInitialState() {
		return {
			first: "",
			last: "",
			email: "",
			tickets:[]
		};
	},

	handleFieldChange(e){
		//For the global fields, this changes the
		//state of the wrapper, with the name corresponding
		//to the key of the state changed.
		this.setState({[e.target.name]: e.target.value});
	},

	handleAddTicket(e){
		this.setState({tickets: this.state.tickets.concat({
			type: null,
			citation: null,
			case: null,
			outcome: null,
			copy: null,
			charges:[],
			costs:[]
		})})
	},

	componentDidUpdate(){
		console.log(this.state);
	},

    render: function(){
		var tickets = this.state.tickets;
		return (
			<div className="form">
				<TextField 	label="First Name"
							name="first"
							fieldKey="firstName"
							value={this.state.firstName}
							handleFieldChange={this.handleFieldChange} />

				<TextField 	label="Last Name"
							name="last"
							fieldKey="lastName"
							value={this.state.lastName}
							handleFieldChange={this.handleFieldChange} />

				<TextField	label="Client Email"
							name="email"
							fieldKey="email"
							value={this.state.email}
							handleFieldChange={this.handleFieldChange} />

							{tickets.map( (item) => {
								return <FullButton label="This a Ticket" handleClick={this.handleAddTicket} />
							})}
				<FullButton label="New Ticket"
							handleClick={this.handleAddTicket} />
			</div>
		);
	}
});
