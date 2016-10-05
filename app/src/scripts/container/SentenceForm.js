 /*
  * Cost Form Component
  */
import React from 'react';

//===================================================
//================ Dependencies =====================
//===================================================
import TextArea from '../presentation/TextArea.js';
import AddButton from '../presentation/AddButton.js';

export default React.createClass({

	handleCostFieldChange(sentenceIndex, sentenceName, sentenceValue){
		this.props.handleCostFieldChange(this.props.type, costIndex, costName, costValue);
	},

	handleSentenceFieldChange(sentenceIndex, e){
		this.props.handleSentenceFieldChange(sentenceIndex, e.target.value)
	},

	handleClick(){
		this.props.handleAddSentence();
	},

    render: function(){
		let label = this.props.label;
		return (
			<div className = "sentence-form">
				<h3 className = "sentence-form--label">{label}</h3>
				{this.props.sentences.map((sentence, index) => {
					return <TextArea	key = {index}
										index = {index}
										label = ""
										name = "sentence"
										value = {sentence.sentence}
										handleFieldChange = {this.handleSentenceFieldChange} />
				})}
				<AddButton	label = "Add Sentence"
							handleClick = {this.handleClick} />
			</div>
		);
	}
});
