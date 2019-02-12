var express = require('express');
var router = express.Router();


router.get("/",(req,res,next)=>{
    const {books}=req.app.locals.data;
    console.log(books);
    res.send(books);
});    

router.get("/:id",(req,res,next)=>{
    const {books}=req.app.locals.data;
    var bookid=req.params["id"];
    res.send(books.filter(book=>book.id==bookid));
});    

router.delete("/:id",(req,res,next)=>{
    const {books}=req.app.locals.data;
    const {id}=req.params
    var indexToDelete=books.findIndex(book=>book.id==id);
    books.splice(indexToDelete);
    res.sendStatus(202);
});    

router.post("/:title/:authorid",(req,res,next)=>{
    console.log(req.params);
    const {title,authorid}=req.params;
    const {books}=req.app.locals.data;
    
    
    const nextid=books.length;
    books.push(
        {
            id:nextid,
            title,
            authorid
        });
        res.send(books);
    });
module.exports = router;