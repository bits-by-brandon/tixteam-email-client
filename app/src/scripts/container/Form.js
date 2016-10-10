/*
 * Form Component
 */
import React from 'react';
import store from '../Store';

//===================================================
//================ Dependencies =====================
//===================================================
import TextField from '../presentation/TextField.js';
import FullButton from '../presentation/FullButton.js';
import Select from '../presentation/Select.js';
import TicketForm from './TicketForm.js';

export default React.createClass({
    getInitialState(){
        return store.getState()
    },

    componentDidMount(){
        console.log(store.getState());
        store.subscribe(() => {
            console.log(store.getState())
            this.setState(store.getState());
        })
    },

    getTicketSentences(ticketIndex) {
        let ticketSentences = this.state.tickets[ticketIndex].sentences
        return Object.keys(this.state.sentencesById)
            .filter((sentenceId) => {
                return ticketSentences[sentenceId]
            })
            .reduce((o, c) => {
                return {
                    ...o,
                    [c]: this.state.sentencesById[c]
                }
            }, {})
    },

    render: function () {
        let tickets = this.state.tickets;
        return (
            <div className="form">
                <TextField label="First Name"
                           name="firstName"
                           value={this.state.firstName}
                           handleFieldChange={(newValue) => {
                               store.dispatch({
                                   type: 'CHANGE_FIRST_NAME',
                                   firstName: newValue
                               })
                           }}/>

                <TextField label="Last Name"
                           name="lastName"
                           value={this.state.lastName}
                           handleFieldChange={(newValue) => {
                               store.dispatch({
                                   type: 'CHANGE_LAST_NAME',
                                   lastName: newValue
                               })
                           }}/>

                <TextField label="Client Email"
                           name="email"
                           value={this.state.email}
                           handleFieldChange={(newValue) => {
                               store.dispatch({
                                   type: 'CHANGE_EMAIL',
                                   lastName: newValue
                               })
                           }}/>

                <Select label="Lawyer"
                        name="lawyer"
                        options={['Luis Herrera', 'Jordan Ostroff', 'Heather Ostroff']}
                        defaultValue="-Select a lawyer-"
                        value={this.state.lawyer}
                        handleFieldChange={(newValue) => {
                            store.dispatch({
                                type: 'CHANGE_LAWYER',
                                lawyer: newValue
                            })
                        }}/>

                {
                    tickets.map((ticket, i) => <TicketForm
                        key={i}
                        index={i}
                        {...ticket}
                        sentences={this.getTicketSentences(i)}/>)
                }


                <FullButton label="New Ticket"
                            handleClick={() => {
                                store.dispatch({
                                    type: 'ADD_TICKET'
                                })
                            }}/>
            </div>
        );
    }
});
