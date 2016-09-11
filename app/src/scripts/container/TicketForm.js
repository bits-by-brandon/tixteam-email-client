 /*
  * Ticket Form Component
  */
import React from 'react';

//===================================================
//================ Dependancies =====================
//===================================================
import TextField from '../presentation/TextField.js';
import TextArea from '../presentation/TextArea.js';
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

	handleTypeUpdate(){
		this.props.handleTypeUpdate();
	},
	//type: null,
	//citationNumber: null,
	//caseNumber: null,
	//outcome: null,
	//copy: null,
	//customCopy: null,
	//charges:[],
	//costs:[]

    render: function(){
		let type = this.props.ticket.type;
		let ticket = this.props.ticket;
		let number = ticket.citationNumber || ticket.caseNumber;
		let outcome = ticket.outcome;
		let copy = ticket.copy;
		let customCopy = ticket.customCopy;
		return (
			<div className = "ticket-form">
				<FullButton label = {type ? type + ((type=='civil')?' Ticket':' Charge'): 'Disposition ' + (this.props.index + 1)} 
							handleClick = {this.handleAddTicket} />

				<Radio		label = "Type"
							name = "type"
							options = {['civil', 'criminal']}
							value = {this.props.ticket.type}
							handleRadioSelect = {this.handleRadioSelect} />

				{(() => {if(type){
					return <TextField 	
								label = {type=="civil"?'Citation Number':'Case Number'}
								name = {type=="civil"?'citationNumber':'caseNumber'}
								value = {this.props.citationNumber}
								handleFieldChange = {this.handleTicketFieldChange} />
			   	}})()}

				{(() => {if(type){
					return	<Select 	
								label = "Outcome"
								name = "outcome"
								options = {
									type=="civil" ?
										['dismissed', 'adjudicated', 'withold']:
										['dismissed', 'adjudicated guilty', 'withold of adjudication']
								}
								defaultValue = "-Select an outcome-"
								value = {this.props.outcome}
								handleFieldChange = {this.handleTicketFieldChange} />
			   	}})()}

				{(() => {if(outcome){
					return	<Select 	
								label = "Copy"
								name = "copy"
								options = { ['standard', 'custom'] }
								defaultValue = "-Select a message-"
								value = {this.props.outcome}
								handleFieldChange = {this.handleTicketFieldChange} />
			   	}})()}

				{(() => {if(outcome&&copy=='custom'){
					return	<TextArea 	
								label = "Custom Message"
								name = "customCopy"
								value = {this.props.outcome}
								handleFieldChange = {this.handleTicketFieldChange} />
			   	}})()}
			</div>
		);
	}
});
