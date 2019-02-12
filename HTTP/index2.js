const http =require("http");
const fs= require("fs");
const path= require("path");
const port =8080;

const server= http.createServer((req,res)=>{
    res.setHeader("Content-Type","image/png");
    fs.readFile(path.resolve(__dirname,"helloAcademy.png"),(err,data)=>{
        res.end(data);
    })

});

server.listen(port,err=>{
    if(err)
    {
        return console.log(err);
    }
    console.log(`Server is listening on ${port}` )
})