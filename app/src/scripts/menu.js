const   {remote} = require('electron'),
        {openExternal} = require('electron').shell,
        {Menu, MenuItem} = remote;

//noinspection JSUnusedLocalSymbols
const template = [
  {
    label: 'Sitemap',
    submenu: [
      {
        label: 'Generate Sitemap',
        accelerator: 'CmdOrCtrl+S',
        click() {
            console.log( 'Generating Sitemap' );
            ipcRenderer.send( 'GENERATE_SITEMAP' );
        }
      },
      {
        label: 'Import Sitemap',
        accelerator: 'CmdOrCtrl+I',
        click() {
            console.log( 'create Sitemap' );
        }
      },
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click(item, focusedWindow) {
          if (focusedWindow) focusedWindow.reload();
        }
      },
      {
        label: 'Toggle Full Screen',
        accelerator: process.platform === 'darwin' ? 'Ctrl+Command+F' : 'F11',
        click(item, focusedWindow) {
          if (focusedWindow)
            focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
        }
      },
      {
        label: 'Toggle Developer Tools',
        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
        click(item, focusedWindow) {
          if (focusedWindow)
            focusedWindow.webContents.toggleDevTools();
        }
      },
    ]
  },
  {
    label: 'Window',
    role: 'window',
    submenu: [
      {
        label: 'Minimize',
        accelerator: 'CmdOrCtrl+M',
        role: 'minimize'
      },
      {
        label: 'Close',
        accelerator: 'CmdOrCtrl+W',
        role: 'close'
      },
    ]
  },
  {
    label: 'Help',
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        //click() { require('electron').shell.openExternal('http://electron.atom.io'); }
        click() { openExternal('http://electron.atom.io'); }
      },
    ]
  },
];

const menu = Menu.buildFromTemplate(template);

module.exports = {
    init: function(){
        Menu.setApplicationMenu(menu);
    }
};
