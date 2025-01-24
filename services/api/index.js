const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
require('dotenv').config()

app.use(express.static('./'));

app.use(cors())
app.use(express.json())

app.get('/', (_, res) => {
    res.writeHead(200, {
      'content-language': 'text/html',
    });
  
    const pathIndex = path.join(__dirname, '../',  '../', 'front/', 'index.html' );
    const streamIndexHtml = fs.createReadStream(pathIndex);
    streamIndexHtml.pipe(res);
  });

app.get('/cotation', async (req, res) => {

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const cotation = await getCotation()
    res.write(`data: ${JSON.stringify(cotation)}\n\n`)

    setInterval(async () => {
        const cotation = await getCotation()
        res.write(`data: ${JSON.stringify(cotation)}\n\n`)
    }, 90000)
})

async function getCotation() {
    try {
        const cotation = await axios.get(`https://economia.awesomeapi.com.br/USD?token=${process.env.API_COTATION_TOKEN}`)
        return cotation.data[0]
    } catch(err){
        console.log(err)
    }
}

const port = 8081
app.listen(port, () => {
    console.log('Servidor rodando na porta', port)
})