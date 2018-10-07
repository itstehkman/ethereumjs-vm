var WebSocket = require('ws')
var sleep = require('sleep')
var web3 = require('web3')

var ws = new WebSocket('ws://localhost:6666');
ws.onopen = function() {
  ws.send("yo")
}

ws.onmessage = function(event) {
  evmState = JSON.parse(event.data)
  console.log(evmState)
}
