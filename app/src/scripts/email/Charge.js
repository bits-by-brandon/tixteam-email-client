/*
 * Mail Charge Component
 */
import React from 'react';
import ReactHTMLEmail from 'react-html-email';
import {Item, Box, Image, Span} from 'react-html-email';
import Line from './Line';
import Outcome from './Outcome';
import Spacer from './Spacer';

//===========================================
//================ Styles ===================
//===========================================
import style from '../EmailStyles';

// set up React to support a few HTML attributes useful for legacy clients
ReactHTMLEmail.injectReactEmailAttributes();

export default React.createClass({
    render: function () {
        return (
            <Item>
                <Box width="460" align="center">
                    <Line />
                    <Spacer height={20}/>
                    <Item width="200">
                        <h1 style={style.citationHeader}>{this.props.chargeName}</h1>
                    </Item>
                    {(() => {
                        if (this.props.outcome) {
                            return <Outcome
                                outcome={this.props.outcome}
                                outcomeMessage={this.props.outcomeMessage}
                                outcomeCopy={this.props.outcomeCopy}/>
                        }
                    })()}
                    <Spacer height={20}/>
                </Box>
            </Item>
        );
    }
});
