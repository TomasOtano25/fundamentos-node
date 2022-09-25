const { app, BrowserWindow } = require("electron");

let mainWindow;

// listo
app.on("ready", createWindow);

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //     preload: - Precarga de archivos
    // }
  });

  mainWindow.loadFile("index.html");
}
