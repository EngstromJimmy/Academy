const express=require("express");
const app=express();
const port =8080;

//Read Json
var data=require("./data")
//Get form data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.get("/Books",
(req,res)=>{
    res.send(data.books);
    res.end();
});

app.get("/BooksFull",
(req,res)=>{
    
    res.send(data.mappedbooks);
    res.end();
});

app.get("/Book/:id",
(req,res)=>{
    var id=req.params.id;
    var book=data.mappedbooks.find(b=>b.Id==id);
    if(book!=null)
    {    
        res.send(book);
    }
    else
    {
        res.statusCode=404;
    }
    res.end();
});

app.post("/Book",
(req,res)=>{
    var book={"Id":data.books.length+1, "Name":req.body.Name};
    console.log(req.body);
    data.books.push(book);
    res.statusCode=201;
    res.send(book);
    res.end();
});

app.put("/Book",
(req,res)=>{
    var id=req.body.Id;
    
    var index=data.books.findIndex(b=>b.Id===id);
    
    data.books[index]={"Id":id,"Name":req.body.Name};
    res.end();
});

app.delete("/Book/:id",
(req,res)=>{
    var id=req.params.id;
    var index=data.books.findIndex(b=>b.Id==id);
    console.log(index);
    if(index>-1)
    {
        data.books.splice(index,1);
    }
    else
    {
        res.statusCode=404;
    }
    res.end();
});

//Authors
app.get("/Authors",
(req,res)=>{
    res.send(data.authors);
    res.end();
});


app.get("/Author/:id",
(req,res)=>{
    var id=req.params.id;
    var author=data.authors.find(b=>b.Id==id);
    if(author!=null)
    {    
        res.send(author);
    }
    else
    {
        res.statusCode=404;
    }
    res.end();
});

app.post("/Author",
(req,res)=>{
    var author={"Id":data.authors.length+1, "Name":req.body.Name};
    data.authors.push(author);
    res.statusCode=201;
    res.send(author);
    res.end();
});

app.put("/Author",
(req,res)=>{
    var id=req.body.Id;    
    var index=data.authors.findIndex(b=>b.Id===id);
    data.authors[index]={"Id":id,"Name":req.body.Name};
    res.end();
});

app.delete("/Authors/:id",
(req,res)=>{
    var id=req.params.id;
    var index=data.authors.findIndex(b=>b.Id==id);
    console.log(index);
    if(index>-1)
    {
        data.authors.splice(index,1);
    }
    else
    {
        res.statusCode=404;
    }
    
    res.end();
});


app.listen(port,()=>console.log(`Example app running on ${port}`));