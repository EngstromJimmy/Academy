const express=require("express");
const fs=require("fs");
const app=express();
const port=8080;

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.send("Hello");
    res.end();
});

app.get("/test",(req,res)=>{
    res.send("Hello from test");
    res.end();
});

app.get("/image",function (req,res){
    fs.readFile(__dirname + "/helloAcademy.png",
    (err,data)=>{
        res.setHeader("Content-Type","image/png");
        res.end(data);
    })
});


app.listen(port,()=>
{console.log("Server is running")});





// app.listen(port,function()
//{console.log("Server is running")});
