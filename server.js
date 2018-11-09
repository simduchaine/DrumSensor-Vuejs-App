// Require the serialport node module
const SerialPort = require('serialport')
// Require socket.io
const socket = require('socket.io')
// Require express to run webserver
const express = require('express')

// Open webserver
const app = express()
const server = app.listen(3000, function () {
  console.log('listening for requests on port 3000')
})

// Initiate the port
const port = new SerialPort('COM3', {
  baudRate: 115200
})

// Connect to Socket
const io = socket(server)

// Once the port is open, pass data to a socket
port.on('open', () => {
// Pass the serialport data in the socket
  io.on('connection', (socket) => {
    // Read the serialport data
    console.log('SerialPort is open')
    port.on('data', function (data) {
      let buffer = JSON.stringify(data)
      socket.emit('serialData', buffer)
    })
  })
})
