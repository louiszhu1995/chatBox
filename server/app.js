const express = require("express");

const app = express()

const http = require("http").createServer(app);

const io =require("socket.io")(http)

app.get("/",function(req,res){
    res.send("hello server")
})

io.on("connection",socket=>{//socket客户端连接服务端成功事件（io默认定义的）
    console.log("由用户连接进来了");
    socket.on("onChat",msg=>{
        io.emit("showChat",msg)//通过io调用eit，可以广播给所有的客户端
    })
})

http.listen(3001,() =>{
    console.log("服务器开启成功，http://10.0.6.171:3001");
})