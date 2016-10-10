/*
 * Field Component
 */
import React from 'react';

export default React.createClass({

    handleFieldChange(e){
        this.props.handleFieldChange(e.target.value)
    },

    render: function () {
        return (
            <div className="field">
                <label className="field--label">
                    {this.props.label}
                </label>

                <input className="field--currency-input"
                       min="0.00"
                       step="0.01"
                       type="number"
                       onChange={this.handleFieldChange}
                       value={this.props.value}/>

                <span className="field--currency-input--suffix">$</span>
            </div>
        );
    },

    PropTypes: {
        label: React.PropTypes.string,
        value: React.PropTypes.string.isRequired,
        handleFieldChange: React.PropTypes.func.isRequired
    }
});
