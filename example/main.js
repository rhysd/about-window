var electron = require('electron');
var app = electron.app;
var Menu = electron.Menu;
var BrowserWindow = electron.BrowserWindow;
var openAboutWindow = require('about-window').default;
var join = require('path').join;

app.once('window-all-closed',function() { app.quit(); });

app.once('ready', function() {
    var w = new BrowserWindow();
    w.once('closed', function() { w = null; });
    w.loadURL('file://' + join(__dirname, 'index.html'));

    const menu = Menu.buildFromTemplate([
        {
            label: 'Example',
            submenu: [
                {
                    label: 'About This App',
                    click: () => openAboutWindow({
                                icon_path: join(__dirname, 'icon.png'),
                                copyright: 'Copyright (c) 2015 rhysd'
                            })
                }
            ]
        }
    ]);
    Menu.setApplicationMenu(menu);
});
