const express = require('express')
const path = require('path')

const server = express()

const eventRoutes = require('./routes/events')
const userRoutes = require('./routes/users')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('*',(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

server.use('/api/events', eventRoutes)
server.use('/api/users', userRoutes)

module.exports = server
