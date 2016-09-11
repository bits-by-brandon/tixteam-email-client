 /*
  * Form Component
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
		};
	},

	componentDidUpdate(){
		console.log(this.state);
	},

    render: function(){
		var tickets = this.state.tickets;
		return (
			<div className="form">
				<FullButton label="New Ticket"
							handleClick={this.handleAddTicket} />
			</div>
		);
	}
});
