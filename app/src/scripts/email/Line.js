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
		return (
			<Item>
				<Box width="300" align="center">
					<Item><hr style={style.yellowLine}/></Item>
				</Box>
			</Item>
		);
	}
});
