//https://github.com/pugjs/pug
const express=require("express");
const app=express();
const port =8080;
app.set("view engine","vash")
var controllers =require("./controllers");

//serve static files
app.use(express.static(__dirname + "/public"));
//app.get("/",(req,res)=>res.render("index",{title:"This page is from vash"}));
controllers.init(app);

app.listen(port,()=>console.log(`Example app running on ${port}`));