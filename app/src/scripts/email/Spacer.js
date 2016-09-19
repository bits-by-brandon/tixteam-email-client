 /*
  * Mail Line Component
  */
import React from 'react';
import ReactHTMLEmail from 'react-html-email';
import { Item, Box } from 'react-html-email';

//===========================================
//================ Styles ===================
//===========================================
import style from '../EmailStyles';
 
// set up React to support a few HTML attributes useful for legacy clients
ReactHTMLEmail.injectReactEmailAttributes()

export default React.createClass({
    render: function(){
		let height = this.props.height ? this.props.height.toString() : "20";
		return (
			<Item>
				<Box width="100%" height={height}>
					<Item>
						<p style={{lineHeight:0, margin:0, height: 0, fontSize: 0}}>&nbsp;</p>
					</Item>
				</Box>
			</Item>
		);
	}
});
