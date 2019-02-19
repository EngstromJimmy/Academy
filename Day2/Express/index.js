const express=require("express"); //Get a reference to the express NPM package
const fs=require("fs"); //Get a reference to the filesystem
const app=express(); //Create a web server called "app"
const port=8080; //Create a variable with portnumber (this can be anything)

//Tell app that you want it to serve static files from the folder "public"
//all files in the public folder will be availible through localhost:8080/anyfile.anyextention
app.use(express.static("public")); 

//If you surf to http://localhost:8080/ will return "Hello"
// the "/" is the search path just after 8080 in the url above
app.get("/",(req,res)=>{
    res.send("Hello");
    res.end();
});

//If you surf to http://localhost:8080/test will return "Hello from test"
// the "/test" is the search path just after 8080 in the url above
app.get("/test",(req,res)=>{
    res.send("Hello from test");
    res.end();
});

//If you surf to http://localhost:8080/image will return the image helloAcademy.png
// the "/image" is the search path just after 8080 in the url above
app.get("/image",function (req,res){
    fs.readFile(__dirname + "/helloAcademy.png",
    (err,data)=>{
        res.setHeader("Content-Type","image/png");
        res.end(data);
    })
});

//Start the server
app.listen(port,()=>
{console.log("Server is running")});





// app.listen(port,function()
//{console.log("Server is running")});
