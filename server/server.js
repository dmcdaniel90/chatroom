const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')

const app = express()
const PORT = process.env.PORT || 3000
const server = createServer(app)

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  socket.on('set_username', (username) => {
    socket.username = username
    console.log(`Username set: ${username}`)
  })

  socket.on('send_message', (data) => {
    socket.broadcast.emit('receive_message', data)
    console.log(data)
  })

  socket.on('join_room', (data) => {
    socket.join(data.room)
    console.log(`User with ID: ${data.username} joined room: ${data.room}`)
    socket.emit('joined_room', data)
  })
})


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
