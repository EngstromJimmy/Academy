//EJS
//EJS-locals
var ejsEngine=require("ejs-locals");
const express=require("express");
const app=express();
const port =8080;
app.engine("ejs",ejsEngine);
app.set("view engine","ejs");

app.get("/",(req,res)=>res.render("index",{title:"This page is from ejs"}));

app.listen(port,()=>console.log(`Example app running on ${port}`));