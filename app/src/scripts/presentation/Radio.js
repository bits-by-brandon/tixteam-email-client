/*
 * Field Component
 */
import React from 'react';

export default React.createClass({
    render: function () {
        return (
            <div className="field">
                <label className="field--label">
                    {this.props.label}
                </label>

                <div className="field--radio">
                    {this.props.options.map((item, index) => {
                        return (
                            <div
                                className={"field--radio--option" + (this.props.value == item ? ' active' : '')}
                                key={index}
                                onClick={this.props.handleRadioSelect(item)}>
                                {item}
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    },

    propTypes: {
        label: React.PropTypes.string,
        value: React.PropTypes.string,
        options: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
        handleRadioSelect: React.PropTypes.func.isRequired
    }
});
