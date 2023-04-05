const { app, BrowserWindow } = require("electron");
const path = require("path");

const isMac = process.platform === "darwin";
const isDev = process.env.NODE_ENV !== "production";

const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: true,
      worldSafeExecuteJavascript: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadFile("./public/index.html");
};

app.on("ready", () => {
  createMainWindow();
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  if (!isMac) app.quit();
});

// Open a window if none are open (macOS)
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
});
