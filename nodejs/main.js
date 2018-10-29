/*const http  = require('http'); */
const fs = require('fs')
const cors = require('cors')
const express = require('express')
const path = require('path')
const app = express()

const port = 3000

app.use(cors())

app.get('/', function(req, res){
    console.log(`Send root on port ${port}`)
    const fileMainPageInfo = fs.readFileSync(path.resolve( __dirname, './MainPageInfo.json'), 'utf8')
    return res.send(JSON.parse(fileMainPageInfo)).end()
})

app.get('/:alias/:globalId', function(req, res){
    const fileQuestInfo = fs.readFileSync(path.resolve( __dirname, './GeneralQuestsInfo.json'), 'utf8')
    const fileLeafs = fs.readFileSync(path.resolve(__dirname, './FinishedQuestsLeafs.json'), 'utf8')
    let readData = JSON.parse(fileQuestInfo)
    let readLeafs = JSON.parse(fileLeafs)
    let sendLeafs = []
    for ( let key in readData){
        if (readData[key].globalId == req.params.globalId && readData[key].alias === req.params.alias){
            console.log(readData[key])
            console.log(readLeafs)
            for ( let key2 in readLeafs){
                if ( readLeafs[key2].questId == readData[key].id ){
                    sendLeafs.push(readLeafs[key2].name)
                }
            }
            console.log(sendLeafs)
            return res.send({ questInfo: readData[key], leafsInfo : sendLeafs}).end()
        }
    }
    console.log(req.params.alias, req.params.globalId)
    return res.status(404).send('Nothing here').end()
    
})

app.listen(port)