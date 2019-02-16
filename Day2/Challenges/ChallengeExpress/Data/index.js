var books=require("./books.json");
var authors=require("./authors.json");
var authorbooks=require("./bookauthors.json");

module.exports.books=books;
module.exports.authors=authors;
module.exports.authorbooks=authorbooks;

//Get a nicer array
var mappedauthorbook=authorbooks.map(ba=>{
    var author=authors.find(a=>a.Id===ba.AuthorId);
    var book=books.find(b=>b.Id===ba.BookId);
    return{book,author};
});

var mappedbooks=books.map(b=>{
    return {"Id":b.Id,"Name":b.Name,"Authors":mappedauthorbook.filter(ba=>ba.book.Id===b.Id).map(b=>b.author)};
})
module.exports.mappedbooks=mappedbooks;
console.log(mappedbooks);