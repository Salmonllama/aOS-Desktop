const { app, BrowserWindow } = require('electron');

//require('./crash-reporter');
if (require('electron-squirrel-startup')) return;

var mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        show: false
    });

    mainWindow.maximize();
    mainWindow.loadURL('https://aaronos.dev').then(mainWindow.show());
}); 