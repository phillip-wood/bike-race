const express = require('express')
const path = require('path')

const server = express()

const eventRoutes = require('./routes/events')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/events', eventRoutes)

server.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
