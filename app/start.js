const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({ width: 1920, height: 1080 });

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL || url.format({
      pathname: path.join(__dirname, './../build/index.html'),
      protocol: 'file:',
      slashes: true,
    }),
  );

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('activate', () => mainWindow === null && createWindow());
app.on('ready', createWindow);
app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit());