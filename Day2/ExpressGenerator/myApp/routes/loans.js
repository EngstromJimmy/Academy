var express = require('express');
var router = express.Router();


router.get("/",(req,res,next)=>{
    const {books,users,loans}=req.app.locals.data;
    const mappedloans=loans.map(({bookid,userid})=>{
     const book=books.find(book=>book.id===bookid);
     const user=users.find(user=>user.id===userid);
     return {book,user};
    })

    res.send(mappedloans);
});    

module.exports = router;