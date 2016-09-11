 /*
  * Field Component
  */
import React from 'react';

export default React.createClass({
    render: function() {
		return (
			<div className = "field">
				<label className = "field--label">
					{this.props.label}
				</label>

				<div className = "field--radio">
				{this.props.options.map((item, index) => {
					return <div 
								className = {"field--radio--option" + (this.props.value == item ? ' active' : '')}
								key = {index}
								onClick = {() => {this.props.handleRadioSelect(this.props.name, item)}}
								>
								{item}
							</div>
				})}
				</div>
			</div>
		);
	}
});
