 /*
  * Select Field Component
  */
import React from 'react';

export default React.createClass({
    render: function() {
		return (
			<div className = "field">
				<label className = "field--label" htmlFor = {this.props.name}>
					{this.props.label}
				</label>

				<select 	className="field--select" 
							type="select"
							name={this.props.name}
							onChange={this.props.handleFieldChange}
							value={this.props.value} >
				{this.props.options.map((item, index) => {
					return <option 
									value={item}
									key={index}>
								{item}
							</option>
				 })}
				</select>
			</div>
		);
	}
});
