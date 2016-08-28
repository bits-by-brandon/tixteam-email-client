 /*
  * Full Button Component
  */
import React from 'react';

export default React.createClass({
    render: function() {
		return (
			<button onClick={this.props.handleClick} className='full-button'>
				{this.props.label}
			</button>
		);
	}
});
