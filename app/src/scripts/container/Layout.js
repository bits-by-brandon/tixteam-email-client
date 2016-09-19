 /*
  * RouteSection Component
  */
import React from 'react';

//===================================================
//================ Dependancies =====================
//===================================================
import Form from './Form';
import Email from './Email';

export default React.createClass({
	getInitialState() {
		return {
			//first: "",
			//last: "",
			//email: "",
			//lawyer: "",
			//tickets:[]
			first: "Brandon",
			last: "Chang",
			email: "brandondc741@gmail.com",
			lawyer: "Luis Herrera",
			tickets:[
				{
					type: "civil",
					citationNumber: "A69MQ0E",
					chargeName: "Speeding",
					caseNumber: null,
					outcome: "dismissed",
					copy: "standard",
					customCopy: null,
					costs: [],
					fines: [],
					sentences: [],
				}
			]
		};
	},

	//================================
	//======== Field Handlers ========
	//================================
	handleFieldChange(index, e){
		//For the global fields, this changes the
		//state of the wrapper, with the name corresponding
		//to the key of the state changed.
		this.setState({[e.target.name]: e.target.value});
	},

	//=================================
	//======== Ticket Handlers ========
	//=================================
	handleTicketFieldChange(index, field, value){
		if(field=="citationNumber"||field=="caseNumber"){value = value.toUpperCase()};
		value = ((value=="null"||value=="")?null:value);
		let newTickets = this.state.tickets;
		newTickets[index][field] = value;

		this.setState({
			tickets: newTickets
		})
	},

	handleAddTicket(){
		this.setState({tickets: this.state.tickets.concat({
			type: null,
			citationNumber: null,
			chargeName: null,
			caseNumber: null,
			outcome: null,
			copy: null,
			customCopy: null,
			costs: [],
			fines: [],
			sentences: [],
		})})
	},

	//===================================
	//======== Sentence Handlers ========
	//===================================
	handleAddSentence(ticketIndex){
		let newTickets = this.state.tickets;
		newTickets[ticketIndex].sentences.push({
			sentence: ""
		});
		this.setState({tickets: newTickets});
	},

	handleSentenceFieldChange(ticketIndex, sentenceIndex, value){
		let newTickets = this.state.tickets;
		newTickets[ticketIndex].sentences[sentenceIndex] = value;
		this.setState({tickets: newTickets});
	},

	//====================================
	//======== Cost/Fine Handlers ========
	//====================================
	handleCostFieldChange(ticketIndex, costType, costIndex, costName, costValue){
		let newTickets = this.state.tickets;
		let newCost = newTickets[ticketIndex][costType][costIndex];
		newCost[costName] = costValue;
		newTickets[ticketIndex][costType][costIndex] = newCost;
		this.setState({tickets: newTickets})
	},

	handleAddCost(ticketIndex, costType){
		let newTickets = this.state.tickets;
		newTickets[ticketIndex][costType].push({
			costName: '',
			costAmount: '0.00'
		});
		this.setState({tickets: newTickets});
	},

	handleTypeUpdate(){
		this.setState({
			citationNumber: null,
			caseNumber: null
		})
	},

	componentDidUpdate(){
		console.log(this.state);
	},
    render: function() {
		return (
			<div className='main-layout'>
				<Form 
					handleFieldChange={this.handleFieldChange}
					handleAddTicket={this.handleAddTicket}
					handleTicketFieldChange={this.handleTicketFieldChange}
					handleAddCost={this.handleAddCost}
					handleCostFieldChange={this.handleCostFieldChange}
					handleAddSentence={this.handleAddSentence}
					handleSentenceFieldChange={this.handleSentenceFieldChange}
					handleTypeUpdate={this.handleTypeUpdate}
					{...this.state}
				/>
				<Email {...this.state} />
            </div>
		);
	}
});
