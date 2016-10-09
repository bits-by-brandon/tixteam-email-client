/*
 * Main App Component
 */
import React from 'react';

//===================================================
//================ Dependencies =====================
//===================================================
import Form from './Form';
import Email from './Email';
import store from '../Store';

export default React.createClass({
    getInitialState() {
        return {
            firstName: "Brandon",
            lastName: "Chang",
            email: "brandondc741@gmail.com",
            lawyer: "Luis Herrera",
            tickets: [
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
                    date: null,
                },
                {
                    type: "civil",
                    citationNumber: "A52DAXJ",
                    chargeName: "Reckless Driving",
                    caseNumber: null,
                    outcome: "withold",
                    copy: "standard",
                    customCopy: null,
                    costs: [],
                    fines: [],
                    sentences: [],
                    date: null,
                }
            ],
            outcomeMessage: {
                dismissed: "Congratulations! Your charges were dropped. That means no fines, no school, and no points on your record.",
                withold: "We were able to keep a conviction and points off of your record. Below are the conditions imposed by the court.",
                adjudicated: "We are sorry, you were found guilty by the state. You will have to serve the sentence as stated below."
            },
            outcomeCopy: {
                dismissed: "Thank you for trusting us to handle your case. Luis Herrera and the Tix Team were able to get your case dismissed! No Fines, No Points, No Traffic Class – Totally dismissed!",
                withold: "These sentences must be completed by the date specified. Failure complete the sentences may result in a larger legal penalty.",
                adjudicated: "These sentences must be completed by the date specified. Failure complete the sentences may result in a larger legal penalty."
            }
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
        if (field == "citationNumber" || field == "caseNumber") {
            value = value.toUpperCase()
        }
        value = ((value == "null" || value == "") ? null : value);
        let newTickets = this.state.tickets;
        newTickets[index][field] = value;

        this.setState({
            tickets: newTickets
        })
    },

    handleAddTicket(){
        this.setState({
            tickets: this.state.tickets.concat({
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
            })
        })
    },

    //===================================
    //======== Sentence Handlers ========
    //===================================
    handleAddSentence(ticketIndex){
        let newTickets = this.state.tickets;
        newTickets[ticketIndex].sentences.push('');
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

    render: function () {
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
