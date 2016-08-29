 /*
  * Ticket Form Component
  */
import React from 'react';

//===================================================
//================ Dependancies =====================
//===================================================
import TextField from '../presentation/TextField.js';
import FullButton from '../presentation/FullButton.js';

export default React.createClass({
	getInitialState() {
		return {
			active: false
		};
	},

	handleAddTicket(){
		this.props.handleAddTicket
	},

    render: function(){
		return (
			<div className="ticket-Form">
				<FullButton label="New Ticket"
							handleClick={this.handleAddTicket} />
			</div>
		);
	}
});
