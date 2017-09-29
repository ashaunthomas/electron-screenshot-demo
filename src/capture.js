const electron = require('electron');
const { ipcRenderer: ipc } = electron;

function onCapture() {
    console.log('captured!');
}

ipc.on('capture',onCapture);