"use strict";

var ws = require('ws');

var express = require('express');

var app = express();
app.use(express["static"]('../public'));
app.listen(21023, function () {
  console.log('web服务器启动成功');
});
var wss = new ws.Server({
  port: 1001
});
wss.on('connection', function (client) {
  console.log('客户端连接成功');
  client.on('message', function (msg) {
    console.log('msg=', msg);
    client.send(msg.repeat(12));
  });
});
console.log('websocke服务器启动');
console.log(123);