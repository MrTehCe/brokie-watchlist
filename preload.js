const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Data connection will go here
});