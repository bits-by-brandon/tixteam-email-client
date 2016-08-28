// ================================
// ===== Dependancies =============
// ================================
const   electron = require( 'electron' ),
        http = require('http'),
        generateId = require('./server/utilities.js').generateId,
        {ipcMain, app, shell, BrowserWindow} = electron;

// ========================================
// ===== Initialize Variables =============
// ========================================
var win;

//=============================================
//======= Main Processer Communication ========
//=============================================

function createWindow(){
    win = new BrowserWindow({width: 1200, height: 800});

    win.loadURL(`file:${__dirname}/index.html`);

    win.webContents.openDevTools();

    win.on('closed', () => {
        win=null
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if( process.platform !== 'darwin' ){
        app.quit();
    }
})

app.on('activate', () => {
    if( win === null ){
        createWindow();
    }
});
