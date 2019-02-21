const express=require("express"); //Gets a reference to the express NPM package
const app=express(); //Creates an instance of the Express server called app
const port= 8080; //the port we want the server to use

const books=require("./books"); //Reads the books.json into the variable books
const booksauthors=require("./bookauthors"); //Reads the bookauthors.json into the variable bookauthors
const authors=require("./authors"); //Reads the authors.json into the variable authors

const fs=require("fs"); //Gives access to the filesystem

/*
    This part might be hard to follow.
    It takes the json that contains a relation between 
    Book and author and created a new array containing 
    {
        book,
        author
    }
    Since some of the books har two authors this collection
    will have duplicates
*/
var mappedauthorbook=booksauthors.map(ba=>{
    var author=authors.find(a=>a.Id===ba.AuthorId);
    var book=books.find(b=>b.Id===ba.BookId);
    return{book,author};
});

/*
    This takes the above array and turns it into an array containning books with
    an array with authors
    {
        Id,
        Name, (book name),
        Authors[] (Array with authors)
    }
*/
var mappedbooks=books.map(b=>{
    return {
        "Id":b.Id,
        "Name":b.Name,
        "Authors":mappedauthorbook
        .filter(ba=>ba.book.Id===b.Id)
        .map(b=>b.author)};
})

//Allows the app to read the body of a request
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
//Allows the app to read json from the request
app.use(express.json());

//Creates a url /books and if it gest called executes
//the function and return the books array
app.get("/books",function(req,res){
    res.send(books);
    res.end();
});

//Creates a url /booksfull and if it gest called executes
//the function and return the mappedbooks array (the one we add authors to)
app.get("/booksfull",function(req,res){
    res.send(mappedbooks);
    res.end();
});

//Creates a url /books/id and if it gets called executes
//the function and return a single book object
app.get("/books/:id",function(req,res){
    var bookid=req.params.id;
    var book=books.find(b=>b.Id==bookid);

    if(!book){
        res.statusCode=404;
    }
    else{
        res.send(book);
    }
    res.end();
});

//Creates a book by senting a post (see the .http file)
app.post("/books",(req,res)=>{
    var book={
        "Id":books.length+1, //This is of cource really bad way to do this
        "Name":req.body.Name
    };
    books.push(book);
    res.statusCode=201; //Status created
    res.send(book);
    res.end();
    //Saves the json to disk
    var json = JSON.stringify(books);     
    var fs = require('fs'); 
    fs.writeFile(__dirname + '/myjsonfile.json', json, 'utf8', (err)=>{}); 
});

//Updates a book
app.put("/books",(req,res)=>{
    var bookid=req.body.Id;
    var index=books.findIndex(b=>b.Id==bookid);
    books[index]={"Id":bookid,"Name":req.body.Name};
    
    res.send(books[index]);
    res.end();
});

//Deletes a book
app.delete("/books/:id",(req,res)=>{
    var bookid=req.params.id;
    var index=books.findIndex(b=>b.Id==bookid);
    if(index>-1)
    {
        books.splice(index,1);
    }
    else{
        res.statusCode=404;
    }
    res.end();
});

//Starts the server
app.listen(port,()=>{
    console.log("Running");
});