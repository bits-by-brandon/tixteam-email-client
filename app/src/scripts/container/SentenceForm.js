/*
 * Cost Form Component
 */
import React from 'react';
import store from '../Store';
import {addSentence, changeSentenceType} from '../actions';

//===================================================
//================ Dependencies =====================
//===================================================
import SentenceCard from '../presentation/SentenceCard';
import AddButton from '../presentation/AddButton.js';

export default React.createClass({
    getInitialState(){
        return {
            //TODO: Set state to take new object with relevant sentences only
            ...store.getState()
        }
    },

    render: function () {
        let label = this.props.label;
        return (
            <div className="sentence-form">
                <h3 className="sentence-form--label">{label}</h3>
                {Object.keys(this.props.sentences).map((sentenceKey, index) => {
                    let sentence = this.state.sentencesById[sentenceKey];
                    console.log(sentence);
                    return <SentenceCard
                        key={sentenceKey}
                        label={index + 1}
                        name="sentence"
                        handleSentenceTypeChange={(newValue) => {
                            changeSentenceType({ sentenceKey, newValue })
                        }}
                        handleSentenceMessageChange={(newValue) => {
                            changeSentenceType({ sentenceKey, newValue })
                        }}
                        value={sentence}/>
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
