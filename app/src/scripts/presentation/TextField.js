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

				<input 	className = "field--text-input" 
						name = {this.props.name}
						type = "text"
						onChange = {this.handleFieldChange}
						value = {this.props.value} />
			</div>
		);
	}
});
