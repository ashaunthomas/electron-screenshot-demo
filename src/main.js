const electron = require('electron');

const { app } = electron;

let mainWindow;

app.on('ready', _ => {
    mainWindow = new BrowserWindow({
        width:0,
        height:0,
        resizable:false,
        frame:false
    })

    mainWindow.loadURL(`file://${__dirname}/capture.html`);
    mainWindow.on('close', _ => {
        mainWindow = null;
    })
})