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
import CostForm from './CostForm.js';
import SentenceForm from './SentenceForm.js';

export default React.createClass({
	getInitialState() {
		return {
			active: false
		};
	},

	handleTicketFieldChange(index, e){
		this.props.handleTicketFieldChange(this.props.index, e.target.name, e.target.value);
	},

	handleCostFieldChange(costType, costIndex, costName, costValue){
		this.props.handleCostFieldChange(this.props.index, costType, costIndex, costName, costValue);
	},

	handleRadioSelect(field, value){
		this.props.handleTicketFieldChange(this.props.index, field, value);
	},

	handleTypeUpdate(){
		this.props.handleTypeUpdate();
	},

	handleAddCost(costType){
		this.props.handleAddCost(this.props.index, costType);
	},

	handleAddSentence(){
		this.props.handleAddSentence(this.props.index);
	},

	handleSentenceFieldChange(sentenceIndex, value){
		this.props.handleSentenceFieldChange(this.props.index, sentenceIndex, value);
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
		let charges = ticket.charges;
		let costs = ticket.costs;
		let chargeName = ticket.chargeName;
		//TODO: Remove ticket functionality
		return (
			<div className = "ticket-form">
				<FullButton label = {chargeName ? chargeName: 'Disposition ' + (this.props.index + 1)} 
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
					return <TextField 	
								label = "Charge"
								name = "chargeName"
								value = {this.chargeName}
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

				{(() => {if(type){
					return <CostForm
								label = "Court Costs"
								type = "costs" 
								costs = {costs}
								handleAddCost = {this.handleAddCost}
								handleCostFieldChange = {this.handleCostFieldChange} />
			   	}})()}

				{(() => {if(type){
					return <CostForm
								label = "Fines"
								type = "fines" 
								costs = {this.props.ticket.fines}
								handleAddCost = {this.handleAddCost}
								handleCostFieldChange = {this.handleCostFieldChange} />
			   	}})()}

				{(() => {if(type){
					 //TODO: Create new Sentences Field
					return <SentenceForm
								label = "Sentences"
								type = "sentences" 
								sentences = {this.props.ticket.sentences}
								handleAddSentence = {this.handleAddSentence}
								handleCostFieldChange = {this.handleCostFieldChange}
								handleSentenceFieldChange = {this.handleSentenceFieldChange} />
			   	}})()}
			</div>
		);
	}
});
