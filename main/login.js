const {electron, ipcMain, app, BrowserWindow} = require('electron');
const {is} = require('electron-util');
const ipc = require('electron-better-ipc');
const delay = require('delay');
const isDev = require('electron-is-dev');
const path = require('path');
const loadRoute = require('./utils/routes');
const {openMainWiew} = require('./main');

let loginView = null;

const openLoginWiew = async () => {

  if (loginView) {

    loginView.show();

    return loginView;
  }

  loginView = new BrowserWindow({
    backgroundColor: "white",
    width: 350,
    height: 600,
    resizable: false,
    maximizable: false,
    frame: false,
    minimizable: false,
    fullscreenable: false,
    transparent: true,
    center: true,
    show: false,
    movable: true,
    webPreferences:{
      nodeIntegration : true
    },
    icon: path.join(__dirname, '..', 'static', '/logos/icon.png'),
  });


  loadRoute(loginView, "login");
  
  loginView.once("ready-to-show", ()=>{
    loginView.show();
  })

  ipc.answerRenderer('login-close', async () => {
    loginView.hide();
  });

  ipc.answerRenderer('login-close', async () => {
    loginView.hide();
  });

  ipc.answerRenderer('login-minimize', async () => {
    loginView.minimize();
  });


  ipc.on('open_mainView', async (event, data) => {
    console.log("home", openMainWiew());
  });

  loginView.on('close', (event) => {
    loginView = null;
  });
};

module.exports = {
    openLoginWiew
};
