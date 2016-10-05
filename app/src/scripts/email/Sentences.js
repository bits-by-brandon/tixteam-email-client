// React Component: Sentences
// ==========================

// Dependencies
// ==========================
import React from 'react';
import ReactHTMLEmail from 'react-html-email';
import {Item, Box, Image, Span} from 'react-html-email';
import Line from './Line';
import Spacer from './Spacer';
import style from '../EmailStyles';

// set up React to support a few HTML attributes useful for legacy clients
ReactHTMLEmail.injectReactEmailAttributes();

// Component declaration
// ==========================
export default React.createClass({
    getInitialState() {
        return {}
    },
    propTypes: {
        sentences: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
    },
    componentWillReceiveProps(newProps) {
        console.log(newProps);
    },

    render: function () {
        console.log(this.props.sentences);
        return (
            <Item width="100%">
                <Box width="100%">
                    <Item align="center">
                        <h2 style={style.sentenceHeading}>SENTENCE</h2>
                    </Item>
                    <Spacer height={20}/>
                    <Item>
                        <ol style={style.sentenceList}>
                        { this.props.sentences.map((sentence, index) => {
                            return (
                                <li style={style.sentenceText} key={index}>{sentence}</li>
                            )
                        }) }
                        </ol>
                    </Item>
                    <Spacer height={20}/>
                </Box>
            </Item>
        )
    }
});