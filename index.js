const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        fs.readFile('home.html','utf-8',(err,data)=>{
            if(err){
                console.log("Error",err)
                res.end("Error reading home.html")
            }
            else{
                res.end(data)
            }
        })
    }
    else if(req.url=="/about"){
        fs.readFile('about.html','utf-8',(err,data)=>{
            if(err){
                console.log("Error",err)
                res.end("Error reading login.html")
            }
            else{
                res.end(data)
            }
        })
    }
    else if(req.url=="/gellary"){
        fs.readFile('gellary.html','utf-8',(err,data)=>{
            if(err){
                console.log("Error",err)
                res.end("Error reading login.html")
            }
            else{
                res.end(data)
            }
        })
    }
    else if(req.url=="/login"){
        fs.readFile('login.html','utf-8',(err,data)=>{
            if(err){
                console.log("Error",err)
                res.end("Error reading login.html")
            }
            else{
                res.end(data)
            }
        })
    }
    else if(req.url=="/signup"){
        fs.readFile('signup.html','utf-8',(err,data)=>{
            if(err){
                console.log("Error",err)
                res.end("Error reading login.html")
            }
            else{
                res.end(data)
            }
        })
    }
})
server.listen(2300,()=>{
    console.log("server is listening on part 2300")
});