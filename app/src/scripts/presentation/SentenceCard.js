/*
 * Sentence TextArea Component
 */
import React from 'react';
import Radio from './Radio';

import CurrencyField from './CurrencyField';
import TextArea from './TextArea';

export default React.createClass({

    render: function () {
        return (
            <div className="sentence-form--card">
                {(()=> {
                    if (this.props.label) {
                        return (
                            <label className="field--label">
                                {this.props.label}
                            </label>
                        )
                    }
                })()}

                <Radio
                    options={['Fine', 'Other']}
                    value={this.props.isFine ? 'Fine' : 'Other'}
                    handleRadioSelect={this.props.handleSentenceTypeChange}
                />

                {(()=> {
                    if (this.props.isFine) {
                        return (
                            <CurrencyField
                                label="Amount Owed"
                                value={this.props.fineAmount}
                                handleFieldChange={this.props.handleSentenceFineChange}/>
                        )
                    } else {
                        return (
                            <TextArea
                                label="Conditions"
                                handleFieldChange={this.props.handleSentenceMessageChange}
                                value={this.props.message}
                            />
                        )
                    }
                })()}

                <span
                    className="filed--text-area--close"
                    onClick={this.props.handleDeleteSentence}>
                </span>
            </div>
        );
    }
});
