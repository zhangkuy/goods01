const ws = require('ws')
const express = require('express')
const app = express();
app.use(express.static('../public'))
app.listen(21023, () => {
    console.log('web服务器启动成功');
})

let wss = new ws.Server({
    port: 1001
})
wss.on('connection', (client) => {
    console.log('客户端连接成功');
    client.on('message', (msg) => {
        console.log('msg=', msg);
        client.send(msg.repeat(12))
    })
})
console.log('websocke服务器启动');