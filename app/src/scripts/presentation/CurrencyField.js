 /*
  * Field Component
  */
import React from 'react';

export default React.createClass({

	handleFieldChange(e){
		this.props.handleFieldChange(this.props.index, e)
	},

    render: function() {
		return (
			<div className = "field">
				<label className = "field--label" htmlFor = {this.props.name}>
					{this.props.label}
				</label>

				<input 	className = "field--currency-input" 
						name = {this.props.name}
						min = "0.01"
						step = "0.01"
						type = "number"
						onChange = {this.handleFieldChange}
						value = {this.props.value} />

				<span	className = "field--currency-input--suffix">$</span>
			</div>
		);
	}
});
