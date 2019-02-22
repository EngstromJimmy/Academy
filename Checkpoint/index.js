const express=require("express");
const app=express();
const port =process.env.PORT || 1337;
app.set("view engine","vash");

const fetch=require("node-fetch");

//Get form data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//Creates the connection
var mysql      = require('mysql');
var pool = mysql.createPool({
    host : 'academynode-mysqldbserver.mysql.database.azure.com',
    database : 'academy',
    user : 'academyuser@academynode-mysqldbserver',
    password : '@cademyP@ssword',
});

//serve static files
app.use(express.static(__dirname + "/public"));

app.get("/",(req,res)=>{
    //Get the data from the database
    pool.query('SELECT * FROM temperatures', function (error, results, fields) {
        res.render("index",{temps:results})
    });    
});

app.get("/api",(req,res)=>{
    //Get the data from the database
    pool.query('SELECT * FROM temperatures', function (error, results, fields) {
        res.send(results);
        res.end();
    });    
});

app.post("/api",(req,res)=>{
    var location=req.body.location;
    var temp=req.body.temp;
    var hum=req.body.hum;
    //Get the data from the database
    pool.query("INSERT INTO Temperatures(LocationName,TemperatureInC,Humidity) VALUES('" + location + "'," + temp + "," + hum + ")", function (error, results, fields) {
        if(error)
         {
             console.log(error);
                res.statusCode=500;
         }
        else
        {
            res.statusCode=201;
        }
            res.end(); 
        });    
});

app.listen(port,()=>console.log(`Example app running on ${port}`));