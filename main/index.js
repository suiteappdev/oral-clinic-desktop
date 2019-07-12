'use strict';
const {app, Menu} = require('electron');
const prepareNext = require('electron-next');

//windows handlers
const {openLoginWiew} = require('./login');
//const {openHomeView} = require('./home');
const ipc = require('electron-better-ipc');

app.on('ready', async () => {
  await prepareNext('./renderer');
  await openLoginWiew();
});

app.on('window-all-closed', event => {
  event.preventDefault();
  //removeTray();
  app.quit();
});


