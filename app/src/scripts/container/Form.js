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

	handleTicketFieldChange(index, field, value){
		let newTickets = this.state.tickets;
		newTickets[index][field] = value;

		this.setState({
			tickets: newTickets
		})
	},

	handleAddTicket(e){
		this.setState({tickets: this.state.tickets.concat({
			type: null,
			citationNumber: null,
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
			<div className = "form">
				<TextField 	label = "First Name"
							name = "first"
							value = {this.state.firstName}
							handleFieldChange = {this.handleFieldChange} />

				<TextField 	label = "Last Name"
							name = "last"
							value = {this.state.lastName}
							handleFieldChange = {this.handleFieldChange} />

				<TextField	label = "Client Email"
							name = "email"
							value = {this.state.email}
							handleFieldChange = {this.handleFieldChange} />

				{ this.state.tickets.map((ticket, i) => {
					return <TicketForm 
								key = {i}
								index = {i}
								ticket = {ticket}
								handleTicketFieldChange = {this.handleTicketFieldChange} />
				})}

				<FullButton label = "New Ticket"
							handleClick = {this.handleAddTicket} />
			</div>
		);
	}
});
