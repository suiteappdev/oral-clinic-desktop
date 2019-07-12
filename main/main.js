const {electron, ipcMain, app, BrowserWindow} = require('electron');
const {is} = require('electron-util');
const ipc = require('electron-better-ipc');
const delay = require('delay');
const isDev = require('electron-is-dev');
const path = require('path');
const loadRoute = require('./utils/routes');

let mainView = null;

const openMainWiew = async () => {

  if (mainView) {

    mainView.show();

    return mainView;
  }

  mainView = new BrowserWindow({
    backgroundColor: "white",
    useContentSize : true,
    resizable: true,
    maximizable: true,
    frame: true,
    minimizable: true,
    fullscreenable: true,
    transparent: false,
    center: true,
    show: false,
    movable: true,
    webPreferences:{
      nodeIntegration : true
    },
    icon: path.join(__dirname, '..', 'static', '/logos/icon.png'),
  });


  loadRoute(mainView, "main");
  
  mainView.once("ready-to-show", ()=>{
    mainView.show();
  })

  ipc.answerRenderer('login-close', async () => {
    mainView.hide();
  });

  ipc.answerRenderer('login-close', async () => {
    mainView.hide();
  });

  ipc.answerRenderer('login-minimize', async () => {
    mainView.minimize();
  });

  mainView.on('close', (event) => {
    mainView = null;
  });
};

module.exports = {
    openMainWiew
};
