 /*
  * Form Component
  */
import React from 'react';

//===================================================
//================ Dependancies =====================
//===================================================
import TextField from '../presentation/TextField.js';
import FullButton from '../presentation/FullButton.js';
import Select from '../presentation/Select.js';
import TicketForm from './TicketForm.js';

export default React.createClass({

	//================================
	//======== Field Handlers ========
	//================================
	handleFieldChange(index, e){
		this.props.handleFieldChange(index, e);
	},

	//=================================
	//======== Ticket Handlers ========
	//=================================
	handleTicketFieldChange(index, field, value){
		this.props.handleTicketFieldChange(index, field, value);
	},

	handleAddTicket(){
		this.props.handleAddTicket();
	},

	//===================================
	//======== Sentence Handlers ========
	//===================================
	handleAddSentence(ticketIndex){
		this.props.handleAddSentence(ticketIndex);
	},

	handleSentenceFieldChange(ticketIndex, sentenceIndex, value){
		this.props.handleSentenceFieldChange(ticketIndex, sentenceIndex, value);
	},

	handleCostFieldChange(ticketIndex, costType, costIndex, costName, costValue){
		this.props.handleCostFieldChange(ticketIndex, costType, costIndex, costName, costValue);
	},

	handleAddCost(ticketIndex, costType){
		this.props.handleAddCost(ticketIndex, costType);
	},

	handleTypeUpdate(){
		this.props.handleTypeUpdate();
	},

    render: function(){
		let tickets = this.props.tickets;
		return (
			<div className = "form">
				<TextField 	label = "First Name"
							name = "first"
							value = {this.props.firstName}
							handleFieldChange = {this.handleFieldChange} />

				<TextField 	label = "Last Name"
							name = "last"
							value = {this.props.lastName}
							handleFieldChange = {this.handleFieldChange} />

				<TextField	label = "Client Email"
							name = "email"
							value = {this.props.email}
							handleFieldChange = {this.handleFieldChange} />

				<Select 	label = "Lawyer"
							name = "lawyer"
							options = {['Luis Herrera', 'Jordan Ostroff', 'Heather Ostroff']}
							defaultValue = "-Select a lawyer-"
							value = {this.props.lawyer}
							handleFieldChange = {this.handleFieldChange} />

				{ this.props.tickets.map((ticket, i) => {
					//Render a ticket form for each ticket in state
					return <TicketForm 
								key = {i}
								index = {i}
								ticket = {ticket}
								handleTicketFieldChange = {this.handleTicketFieldChange}
								handleCostFieldChange = {this.handleCostFieldChange}
								handleTypeUpdate = {this.handleTypeUpdate} 
								handleAddCost = {this.handleAddCost}
								handleAddSentence = {this.handleAddSentence}
								handleSentenceFieldChange = {this.handleSentenceFieldChange} />
				})}

				<FullButton label = "New Ticket"
							handleClick = {this.handleAddTicket} />
			</div>
		);
	}
});
