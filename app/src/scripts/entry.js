//===================================================
//================ Dependancies =====================
//===================================================
// Electron dependancies ( note: not bundled with webpack, 
// but resolved during electron build )

const   electron = require('electron'),
        {ipcRenderer} = electron;

//===================================================
//================ Dependancies =====================
//===================================================
import ReactDOM from 'react-dom';
import React from 'react';
import moment from 'moment';
import menu from './menu.js';

//===================================================
//================ React Components =================
//===================================================
import Layout from './container/Layout';

ipcRenderer.on('EVENT', (event, message) => {
})

//====================================================
//================= React-ification ==================
//====================================================
var App = React.createClass({
    getInitialState: function() {
        return {
            sort: 'none',
        };
    },
    componentDidMount: function(){
    },
    render: function() {
		return (
			<Layout />
		);
	}
});

ReactDOM.render(<App />, document.getElementById("app-mount"));
