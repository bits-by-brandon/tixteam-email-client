/*
 * Sentence TextArea Component
 */
import React from 'react';
import Radio from './Radio';

export default React.createClass({

    handleFieldChange(e){
        this.props.handleFieldChange(e.target.value)
    },

    handleDeleteSentence(){
        this.props.handleDeleteSentence()
    },

    render: function () {
        return (
            <div className="sentence-form--card">
                <label className="field--label" htmlFor={this.props.name}>
                    {this.props.label}
                </label>

                <Radio
                    label='Sentence Type'
                    options={['Fine', 'Other']}
                    value={this.props.type}
                    handleRadioSelect={this.props.handleSentenceTypeChange}
                />
                <span
                    className="filed--text-area--close"
                    onClick={this.handleDeleteSentence}>
                </span>

                <textArea
                    className="field--text-area"
                    name={this.props.name}
                    type="text"
                    value={this.props.value}/>
            </div>
        );
    }
});
