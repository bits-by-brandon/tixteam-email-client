/*
 * Sentence TextArea Component
 */
import React from 'react';

export default React.createClass({

    handleFieldChange(e){
        this.props.handleFieldChange(this.props.index, e)
    },

    handleDeleteSentence(){
        this.props.handleDeleteSentence(this.props.index)
    },

    render: function () {
        return (
            <div className = "field">
                <label className = "field--label" htmlFor = {this.props.name}>
                    {this.props.label}
                </label>

                <span
                    className = "filed--text-area--close"
                    onClick={this.handleDeleteSentence}>
                </span>

                <textArea
                    className = "field--text-area"
                    name = {this.props.name}
                    type = "text"
                    onChange = {this.handleFieldChange}
                    value = {this.props.value} />
            </div>
        );
    }
});
