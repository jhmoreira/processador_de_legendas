const { ipcMain } = require('electron')
const pathsRow = require('./pathsRow')
const dadosReady=require('./dadosReady')
const kollection= require('./collection')
ipcMain.on('processamentoLegenda', (event, paths) => {


    pathsRow(paths)
        .then(rows => dadosReady(rows))
        .then(words => kollection(words))
        .then(kollections => event.reply('processamentoLegenda',kollections)

        )

})

