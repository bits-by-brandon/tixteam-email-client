 /*
  * Mail Header Component
  */
import React from 'react';
import ReactHTMLEmail from 'react-html-email';
import { Item, Box, Image } from 'react-html-email';

//===========================================
//================ Styles ===================
//===========================================
import style from '../EmailStyles';
 
// set up React to support a few HTML attributes useful for legacy clients
ReactHTMLEmail.injectReactEmailAttributes();

export default React.createClass({
    render: function(){
		return (
			<Box cellPadding={10} align="center">
				<Item>
					<Image	alt="The Tix Team Traffic Attorneys"
							width={225}
							height={135}
							src="http://i.imgur.com/Ebx1sf0.png" />
				</Item>
			</Box>
		);
	}
});
