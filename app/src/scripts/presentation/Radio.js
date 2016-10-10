/*
 * Field Component
 */
import React from 'react';

export default React.createClass({
    handleRadioSelect(item){
        this.props.handleRadioSelect(item);
    },

    render: function () {
        return (
            <div className="field">
                {(()=> {
                    if (this.props.label) {
                        return (
                            <label className="field--label">
                                {this.props.label}
                            </label>
                        )
                    }
                })()}

                <div className="field--radio">
                    {this.props.options.map((item, index) => {
                        return (
                            <div
                                className={"field--radio--option" + (this.props.value == item ? ' active' : '')}
                                key={index}
                                onClick={()=>{this.handleRadioSelect(item)}}>
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
