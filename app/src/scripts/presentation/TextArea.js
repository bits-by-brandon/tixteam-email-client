 /*
  * Field Component
  */
import React from 'react';

export default React.createClass({
    render: function() {
		return (
			<div className = "field">
				<label className = "field--label" htmlFor = {this.props.name}>
					{this.props.label}
				</label>

				<textArea 	
						className = "field--text-area" 
						name = {this.props.name}
						type = "text"
						onChange = {this.props.handleFieldChange}
						value = {this.props.value} />
			</div>
		);
	}
});
