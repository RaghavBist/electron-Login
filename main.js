const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

//Listen for the app to be ready
app.on('ready', function (){
    //Create new window
    mainWindow = new BrowserWindow({});
    //Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol:'file:',
        slashes: true
    }));
    //Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Insert menu
    Menu.setApplicationMenu(mainMenu);
});
// globalShortcut.register('Control+Q', ()=>{app.quit()});
// Create menu Template
const mainMenuTemplate = [
    {
        label: 'Logins',
        submenu:[
            {
                label: 'Page 1',
                click: function(){
                  mainWindow = new BrowserWindow({});
                  //Load html into window
                    mainWindow.loadURL(url.format({
                        pathname: path.join(__dirname, 'index2.html'),
                        protocol:'file:',
                        slashes: true
                  }));
                }
            },
            {
                label: 'Page 2'
            },
            {
                label: 'Quit',
                // accelator: process.platform == 'win32' ? 'ctrl+Q' : 'command+Q',
                // accelator: process.platform == 'darwin' ? 'command+Q' : 'ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }
]
