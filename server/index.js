const express = require('express')

const app = express()

const http = require('http')

const server = http.createServer(app)

const { Server } = require('socket.io')

const io = new Server(server, {
    cors:{
        origin:"*",
        method:["*"]
    }
})

io.on('connection', (socket) => {
    console.log("Yangi foydalanuvchi ulandi")
    console.log(socket.id)
    socket.on("user:add_to_server", (data) => {
        // console.log(socket.id)
        io.emit("user:new", data)
    })

    // const data = { name:"Hello_"+Math.random() }

    //     socket.emit("user:new", data)
})

const PORT = 3005

server.listen(PORT, () => {
    console.log(`${PORT} - portda development server ishlamoqda!!!`)   
})