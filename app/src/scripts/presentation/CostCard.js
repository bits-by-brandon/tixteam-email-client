 /*
  * Cost Form Component
  */
import React from 'react';

//===================================================
//================ Dependancies =====================
//===================================================
import TextField from './TextField.js';
import CurrencyField from './CurrencyField.js';

export default React.createClass({

	handleCostFieldChange(index, e){
		this.props.handleCostFieldChange(this.props.index, e.target.name, e.target.value);
	},

    render: function(){
		let type = this.props.type;
		console.log('CostCard Props:',this.props)
		return (
			<div	key = {this.props.index}
					className = "cost-form--card">

				<TextField	label = {type=="charges"?"Charge":"Fine / Cost"}
							name = "costName"
							value = {this.props.cost.charges}
							handleFieldChange = {this.handleCostFieldChange} />

				<CurrencyField	
							label = "Amount"
							name = "costAmount"
							value = {this.props.cost.amount}
							handleFieldChange = {this.handleCostFieldChange} />
			</div>
		)
	}
});
