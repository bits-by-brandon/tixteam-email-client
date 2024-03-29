/*
 * Select Field Component
 */
import React from 'react';

export default React.createClass({

    handleFieldChange(e){
        this.props.handleFieldChange(e.target.value)
    },

    render: function () {
        return (
            <div className="field">
                <label className="field--label" htmlFor={this.props.name}>
                    {this.props.label}
                </label>

                <select
                    className="field--select"
                    type="select"
                    name={this.props.name}
                    onChange={this.handleFieldChange}
                    value={this.props.value}>
                    <option value="null">{this.props.defaultValue}</option>
                    {this.props.options.map((item, index) => {
                        return (
                            <option
                                value={item}
                                key={index}>
                                {item}
                            </option>
                        )
                    })}
                </select>
            </div>
        );
    }
});
