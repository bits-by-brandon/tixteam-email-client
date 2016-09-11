 /*
  * Ticket Form Component
  */
import React from 'react';

//===================================================
//================ Dependancies =====================
//===================================================
import TextField from '../presentation/TextField.js';
import FullButton from '../presentation/FullButton.js';
import Radio from '../presentation/Radio.js';
import Select from '../presentation/Select.js';

export default React.createClass({
	getInitialState() {
		return {
			active: false
		};
	},

	handleTicketFieldChange(e){
		this.props.handleTicketFieldChange(this.props.index, e.target.name, e.target.value);
	},

	handleRadioSelect(field, value){
		this.props.handleTicketFieldChange(this.props.index, field, value);
	},

	//type: null,
	//citationNumber: null,
	//case: null,
	//outcome: null,
	//copy: null,
	//charges:[],
	//costs:[]

    render: function(){
		let type = this.props.ticket.type;
		return (
			<div className = "ticket-form">
				<FullButton label = {type ? type + ((type=='civil')?' Ticket':' Charge'): 'Disposition ' + (this.props.index + 1)} 
							handleClick = {this.handleAddTicket} />

				<Radio		label = "Type"
							name = "type"
							options = {['civil', 'criminal']}
							value = {this.props.ticket.type}
							handleRadioSelect = {this.handleRadioSelect} />

				<TextField 	label = "Citation Number"
							name = "citationNumber"
							value = {this.props.citationNumber}
							handleFieldChange = {this.handleTicketFieldChange} />

				<Select 	label = "Outcome"
							name = "outcome"
							options = {['dismissed', 'adjudicated', 'withold']}
							value = {this.props.outcome}
							handleFieldChange = {this.handleTicketFieldChange} />

				<Select 	label = "Outcome"
							name = "outcome"
							options = {['dismissed', 'adjudicated guilty', 'withold of adjudication']}
							value = {this.props.outcome}
							handleFieldChange = {this.handleTicketFieldChange} />
			</div>
		);
	}
});
