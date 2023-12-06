const http = require("http");
const express = require("express");
const path=require('path')
const {Server}=require("socket.io")

const app = express();
const server=http.createServer(app);
const io=new Server(server)

io.on('connection',(socket)=>{
    // console.log("new user conn",socket.id)
    socket.on('user-message',(message)=>{
        // console.log("ana ne message",message)   // show message which is send from the frontend

        io.emit('message',message)  // send the message to client

    })
})

app.use(express.static(path.resolve('./public')))




app.get('/',(req,res)=>{
    return res.sendFile("/public/index.html")
})


server.listen(9000,()=>{
    console.log(`server is started at 9000`)
})
