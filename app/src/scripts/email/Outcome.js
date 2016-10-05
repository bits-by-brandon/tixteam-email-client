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
ReactHTMLEmail.injectReactEmailAttributes();

export default React.createClass({
    render: function(){
        let bannerColors = {
        	"dismissed": "#7ED321",
			"withold": "#7ED321",
			"adjudicated": "#2D2D2D",
		};
		let bannerDefaultColor = "#2D2D2D";
		let outcome = this.props.outcome;
		let bannerColor = bannerColors[outcome] ? bannerColors[outcome] : bannerDefaultColor;
		return (
			<Item>
				<Box width="100%" align="center">
					<Spacer height={20} />
					<Item bgcolor={bannerColor} align="center" cellpadding="20">
                        <Box width="100%" align="center">
							<Spacer height={20} />
							<Item align="center">
                                <h1 style={style.outcomeHeading}>{outcome.toUpperCase()}</h1>
							</Item>
							<Spacer height={20} />
						</Box>
					</Item>
                    <Item bgcolor="#F2F2F2">
                        <Box width="380" align="center">
                            <Spacer height={40}></Spacer>
                            <Item align="center">
                                <p style={style.outcomeMessage}>{this.props.outcomeMessage[this.props.outcome]}</p>
							</Item>
							<Spacer height={40}></Spacer>
						</Box>
					</Item>
					<Spacer height={20} />
                    <Item>
						<p style={style.outcomeCopy}>{this.props.outcomeCopy[this.props.outcome]}</p>
					</Item>
					<Spacer height={20} />
				</Box>
			</Item>
		);
	}
});
