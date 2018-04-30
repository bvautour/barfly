const {app} = require('electron');

function boot() {
  const {BrowserWindow,screen} = require('electron');
  const url = require('url');

  let win = null
  win = new BrowserWindow({
    width: screen.getPrimaryDisplay().size.width,
    height: 40,
    frame: false,
    transparent: true,
    resizable: false,
    type: 'desktop',
    // kiosk: true,
    // skipTaskbar: true,
    // alwaysOnTop:true,
    movable: false,
    minimizable: false,
    autoHideMenuBar: true,
    vibrancy: "menu",
    // show:false,
    x: 0,
    y: 20//screen.getPrimaryDisplay().size.height
  })
  win.loadURL(`file://${__dirname}/index.html`)
  win.setMenu(null)
  // win.maximize()

}

app.on('ready', boot);
// app.dock.hide();
