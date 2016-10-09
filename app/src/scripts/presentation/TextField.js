 /*
  * TextField Component
  */
import React from 'react';

export default React.createClass({

	handleFieldChange(e){
		this.props.handleFieldChange(e.target.value)
	},

    render: function() {
		return (
			<div className = "field">
				<label className = "field--label">
					{this.props.label}
				</label>

				<input 	className = "field--text-input" 
						type = "text"
						onChange = {this.handleFieldChange}
						value = {this.props.value} />
			</div>
		);
	}
});
