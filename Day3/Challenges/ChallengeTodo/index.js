
const express=require("express");
const app=express();
const port =8080;
app.set("view engine","vash")
var controllers =require("./controllers");

//Open db connection
var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("MONGODBCONNECTIONSTRING", {useNewUrlParser: true},function (err, client) {    
     app.locals.db = client.db('tododb');
});


//serve static files
app.use(express.static(__dirname + "/public"));

//Get form data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//Initialize the controllers
controllers.init(app);



app.listen(port,()=>console.log(`Example app running on ${port}`));