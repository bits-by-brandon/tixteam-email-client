/*
 * Cost Form Component
 */
import React from 'react';
import store from '../Store';

//===================================================
//================ Dependencies =====================
//===================================================
import SentenceTextArea from '../presentation/SentenceTextArea';
import AddButton from '../presentation/AddButton.js';

export default React.createClass({

    render: function () {
        let label = this.props.label;
        return (
            <div className="sentence-form">
                <h3 className="sentence-form--label">{label}</h3>
                {Object.keys(this.props.sentences).map((sentenceKey, index) => {
                    let sentence = this.props.sentences[sentenceKey];
                    return <SentenceTextArea
                        key={sentenceKey}
                        id={sentenceKey}
                        label={index + 1}
                        name="sentence"
                        value={sentence.sentence}
                        handleFieldChange={(newValue) => {
                            store.dispatch({
                                type: 'CHANGE_SENTENCE'
                            })
                        }}
                    />
                })}
                <AddButton label="Add Sentence"
                           handleClick={() => {
                               store.dispatch({
                                   type: "ADD_SENTENCE",
                                   payload: {
                                       ticketIndex: this.props.ticketIndex
                                       //TODO: Figure out Normalized Add Sentence Reducer
                                   }
                               })
                           }}/>
            </div>
        );
    }
});
