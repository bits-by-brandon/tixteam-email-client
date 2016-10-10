/*
 * Ticket Form Component
 */
import React from 'react';
import store from '../Store';
import {
    changeCitationNumber,
    changeChargeName,
    changeOutcome,
    changeMessageType,
    changeCustomMessage,
    changeCourtCost,
} from '../actions';

//===================================================
//================ Dependencies =====================
//===================================================
import TextField from '../presentation/TextField';
import TextArea from '../presentation/TextArea';
import FullButton from '../presentation/FullButton';
import Select from '../presentation/Select';
import CurrencyField from '../presentation/CurrencyField';
import SentenceForm from './SentenceForm';
import DateSelector from '../presentation/DateSelector';

export default React.createClass({
    getInitialState() {
        return {
            active: false
        };
    },

    render: function () {
        return (
            <div className="ticket-form">
                <FullButton
                    label={
                        this.props.chargeName ?
                            this.props.chargeName : 'Disposition ' + (this.props.index + 1)
                    }/>

                <TextField
                    label='Citation Number'
                    value={this.props.citationNumber}
                    handleFieldChange={(newValue) => {
                        store.dispatch(changeCitationNumber(
                            this.props.index,
                            newValue
                        ))
                    }}/>
                <TextField
                    label="Charge"
                    value={this.props.chargeName}
                    handleFieldChange={(newValue) => {
                        store.dispatch(changeChargeName(
                            this.props.index,
                            newValue
                        ))
                    }}/>

                <Select
                    label="Outcome"
                    options={['dismissed', 'adjudicated', 'withold']}
                    defaultValue="-Select an outcome-"
                    value={this.props.outcome}
                    handleFieldChange={(newValue) => {
                        store.dispatch(changeOutcome(
                            this.props.index,
                            newValue
                        ))
                    }}/>

                <CurrencyField
                    label="Court Cost"
                    value={this.props.courtCost}
                    handleFieldChange={(newValue) => {
                        store.dispatch(changeCourtCost(
                            this.props.index,
                            newValue
                        ))
                    }}/>

                {(() => {
                    if (this.props.outcome) {
                        return <Select
                            label="Copy"
                            options={ ['standard', 'custom'] }
                            defaultValue="-Select a message-"
                            value={this.props.messageType}
                            handleFieldChange={(newValue) => {
                                store.dispatch(changeMessageType(
                                    this.props.index,
                                    newValue
                                ))
                            }}/>
                    }
                })()}

                {(() => {
                    if (this.props.outcome && this.props.messageType == 'custom') {
                        return <TextArea
                            label="Custom Message"
                            value={this.props.customMessage}
                            handleFieldChange={(newValue) => {
                                store.dispatch(changeCustomMessage(
                                    this.props.index,
                                    newValue
                                ))
                            }}/>
                    }
                })()}

                <SentenceForm
                    label="Sentences"
                    type="sentences"
                    ticketIndex={this.props.index}
                    sentences={this.props.sentences}/>
            </div>
        );
    }
});
