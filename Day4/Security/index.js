const express=require("express");
const app=express();
const port=8080;

const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));

app.set("view engine","vash");