const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  sayHello: {
    sendHello(message) {
      console.log("hello is working, message: ", message);
      ipcRenderer.send("hello", message);
    },
  },
});
