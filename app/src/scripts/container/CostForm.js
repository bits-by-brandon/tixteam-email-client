 /*
  * Cost Form Component
  */
import React from 'react';

//===================================================
//================ Dependencies =====================
//===================================================
import TextField from '../presentation/TextField.js';
import AddButton from '../presentation/AddButton.js';
import CostCard from '../presentation/CostCard.js';

export default React.createClass({

	handleCostFieldChange(costIndex, costName, costValue){
		this.props.handleCostFieldChange(this.props.type, costIndex, costName, costValue);
	},

	handleClick(){
		this.props.handleAddCost(this.props.type);
	},

    render: function(){
		let type = this.props.type;
		let label = this.props.label;
		return (
			<div className = "cost-form">
				<h3 className = "cost-form--label">{label}</h3>
				{this.props.costs.map((cost, index) => {
					return <CostCard	key = {index}
										index = {index}
										type = {type}
										cost = {cost}
										handleCostFieldChange = {this.handleCostFieldChange} />
				})}
				<AddButton	label = {"Add " + (label.substr(label.length - 1)=="s")?label.slice(0, -1):label}
							handleClick = {this.handleClick} />
			</div>
		);
	}
});
