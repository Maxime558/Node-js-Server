const express = require('express')
const http = require('http')
const app = express()

const host = '172.20.64.98';
const port = '8000';

app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.sendFile('index.html',{root:__dirname})
})

const server = http.Server(app);

server.listen(port,host,()=>{
  console.log(`Server is running at http://${host}:${port}`)
})