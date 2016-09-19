 /*
  * Mail Charge Component
  */
import React from 'react';
import ReactHTMLEmail from 'react-html-email';
import { Item, Box, Image } from 'react-html-email';
import Line from './Line';
import Spacer from './Spacer';

//===========================================
//================ Styles ===================
//===========================================
import style from '../EmailStyles';
 
// set up React to support a few HTML attributes useful for legacy clients
ReactHTMLEmail.injectReactEmailAttributes()

export default React.createClass({
    render: function(){
		return (
			<Item>
				<Box width="100%" align="center">
					<Spacer height={20} />
					<Item align="center">
						<h1 style={style.h1}>{this.props.outcome}</h1>
					</Item>
				</Box>
			</Item>
		);
	}
});
