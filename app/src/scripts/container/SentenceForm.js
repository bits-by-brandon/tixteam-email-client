/*
 * Cost Form Component
 */
import React from 'react';
import store from '../Store';
import {
    addSentence,
    changeSentenceType,
    changeSentenceMessage,
    changeSentenceFine
} from '../actions';

//===================================================
//================ Dependencies =====================
//===================================================
import SentenceCard from '../presentation/SentenceCard';
import AddButton from '../presentation/AddButton';

export default React.createClass({
    render: function () {
        return (
            <div className="sentence-form">
                <h3 className="sentence-form--label">{this.props.label}</h3>
                {Object.keys(this.props.sentences).map((sentenceId, index) => {
                    let sentence = this.props.sentences[sentenceId];
                    return <SentenceCard
                        key={index}
                        label={"Sentence " + (index + 1)}
                        {...sentence}
                        handleSentenceTypeChange={(newValue) => {
                            store.dispatch(changeSentenceType(sentence.id, newValue))
                        }}
                        handleSentenceFineChange={(newValue) => {
                            store.dispatch(changeSentenceFine(sentence.id, newValue))
                        }}
                        handleSentenceMessageChange={(newValue) => {
                            store.dispatch(changeSentenceMessage(sentence.id, newValue))
                        }}
                    />
                })}
                <AddButton
                    label="Add Sentence"
                    handleClick={() => {
                        store.dispatch(addSentence(this.props.ticketIndex))
                    }}/>
            </div>
        );
    }
});
