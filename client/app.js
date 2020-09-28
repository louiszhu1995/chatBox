const express = require("express")

const app = express()

app.use(express.static(__dirname+"/public"))//静态资源拖管

// app.get("/",function(req,res){
//     res.send("hello,client")
// })

app.listen(3000,(res,req)=>{
    console.log("客户端开启成功，http://locahost:3000");
})