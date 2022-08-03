const { app, BrowserWindow } = require('electron');

let isDev = false;

function createWindow() {
    const win = new BrowserWindow({
        title: 'Chart Fox',
        width: 1280,
        height: 1024,
        icon: 'images/icon.ico',
        autoHideMenuBar: !isDev,
        roundedCorners: true,
        webPreferences: {
            devTools: isDev,
        }
    });
    
    win.loadURL('https://www.chartfox.org/?');
}

app.whenReady().then(async () => {
    createWindow();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) return createWindow();
    });
});

app.on('window-all-closed', async () => {
    if(process.platform !== 'darwin') return app.quit();
});