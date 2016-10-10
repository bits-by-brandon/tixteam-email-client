 /*
  * TextArea Component
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

				<textArea
						className = "field--text-area" 
						type = "text"
						onChange = {this.handleFieldChange}
						value = {this.props.value} />
			</div>
		);
	},

	propTypes: {
	    label: React.PropTypes.string,
		value: React.PropTypes.string,
        handleFieldChange: React.PropTypes.func.isRequired
	}
});
