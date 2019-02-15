const express=require("express");
const app=express();
const port =8080;

app.get("/Books",
(req,res)=>{
    res.send("Hello World")
});

app.listen(port,()=>console.log(`Example app running on ${port}`));