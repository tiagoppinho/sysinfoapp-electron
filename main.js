const { app, BrowserWindow } = require('electron')
const path = require('path')

let mainWindow

const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, 'img', 'electron.png'),
        webPreferences: {
            preload: path.join(__dirname, 'preloader.js')
        }
    })

    mainWindow.loadFile(path.join(__dirname, 'index.html'))

    // Open dev tools on start
    // window.webContents.openDevTools()

    mainWindow.on('closed', () => mainWindow = null)
}

// Create main window when app is ready
app.on('ready', createMainWindow)

// Quit app when all windows are closed
app.on('window-all-closed', () => {
    // Check if isn't Mac OS
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})
