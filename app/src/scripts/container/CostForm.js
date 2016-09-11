 /*
  * Cost Form Component
  */
import React from 'react';

//===================================================
//================ Dependancies =====================
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
		return (
			<div className = "cost-form">
				<h3 className = "cost-form--label">{type=="charges"?"Charges":"Fines / Court Costs"}</h3>
				{this.props.costs.map((cost, index) => {
					return <CostCard	key = {index}
										index = {index}
										type = {this.props.type} 
										cost = {cost}
										handleCostFieldChange = {this.handleCostFieldChange} />
/*
 *                   return(
 *                        <div	key = {index}
 *                                className = "cost-form--card">
 *
 *                            <TextField	label = {type=="charges"?"Charge":"Fine / Cost"}
 *                                        name = {type}
 *                                        costIndex = {index}
 *                                        value = {this.props.citationNumber}
 *                                        handleFieldChange = {this.handleCostFieldChange} />
 *
 *                            <TextField	label = "Amount"
 *                                        name = {type}
 *                                        costIndex = {index}
 *                                        value = {this.props.citationNumber}
 *                                        handleFieldChange = {this.handleCostFieldChange} />
 *                        </div>
 *                    )
 */
				})}
				<AddButton	label = {"Add " + (type=="charges"?"Charge":"Cost")}
							handleClick = {this.handleClick} />
			</div>
		);
	}
});
