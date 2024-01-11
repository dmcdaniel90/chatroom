const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')

const app = express()
const server = createServer(app)

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`)

  socket.on('send_message', (data) => {
    socket.to(data.room).emit('receive_message', data)
  })

  socket.on('join_room', (data) => {
    socket.join(data.room)
    console.log(`User with ID: ${data.user} joined room: ${data.room}`)
  })
})

server.listen(3000, () => {
  console.log('Server running on port 3000')
})
