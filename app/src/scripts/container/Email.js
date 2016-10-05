/*
 * Mail Component
 */

//===================================================
//================ Dependancies =====================
//===================================================
import React from 'react';
import ReactHTMLEmail from 'react-html-email';
import {Image, Email, Item, Span, A, renderEmail, Box} from 'react-html-email';
import Line from '../email/Line';
import Header from '../email/Header';
import Charge from '../email/Charge';


//===========================================
//================ Styles ===================
//===========================================
import style from '../EmailStyles';

// set up React to support a few HTML attributes useful for legacy clients<Paste>
ReactHTMLEmail.injectReactEmailAttributes();


export default React.createClass({

    render: function () {
        //Rendering Email Template
        let emailHTML = {
            __html: renderEmail(
                <Email style={{backgroundColor: '#2D2D2D'}} title="Hello World!">
                    <Item width="100%">
                        <Header />
                        <Box width="540" style={style.mainContent} align="center">
                            <Item>
                                <Box width="100%" align="center" cellPadding={40}>
                                    <Item align="center">
                                        <p style={style.h1}>
                                            Mr. <span
                                            style={style.h1Strong}>{this.props.first} {this.props.last},</span>
                                            <br/>Here are the results of your case
                                        </p>
                                    </Item>
                                </Box>
                            </Item>
                            <Item>
                                <Box width="100%">
                                    {this.props.tickets.map((item, index) => {
                                        return <Charge
                                            {...item}
                                            outcomeMessage={this.props.outcomeMessage}
                                            outcomeCopy={this.props.outcomeCopy}
                                            key={index}
                                        />
                                    })}
                                </Box>
                            </Item>
                        </Box>
                    </Item>
                </Email>
            )
        };

        return (
            <div className="email--wrapper" dangerouslySetInnerHTML={emailHTML}>
            </div>
        );
    }
});
