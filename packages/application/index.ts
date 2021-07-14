const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {
  const windows = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  windows.loadURL("http://localhost:2021/");
});
