(function(homeController){
    homeController.init=(app)=>
    {
        app.get("/edit/:id",(req,res)=>{
            var id=req.params.id;
            //Get toto items
            console.log(id);
            var mongo = require('mongodb');
            var o_id = new mongo.ObjectID(id);
            var cursor = app.locals.db.collection('todos').find({"_id":o_id});
            cursor.toArray((err,result)=>{
                if(err)res.render("index",{title:"Error"})
                var todos=result;
                res.render("todo/edit",{title:"Todos",todo:todos[0]})
            });
            
        });

        app.get("/",(req,res)=>{
            //Get toto items
            var cursor = app.locals.db.collection('todos').find({isDone:false});
            cursor.toArray((err,result)=>{
                if(err)res.render("index",{title:"Error"})
                var todos=result;
                res.render("index",{title:"Todos",todos:todos})
            });
            
        });

        app.post("/edit",(req,res)=>{
            //Save to db
            if(req.body._id!=null){
                var mongo = require('mongodb');
                var o_id = new mongo.ObjectID(req.body._id);
                var myquery = { "_id": o_id };
                var newvalues = { $set: {"text":req.body.text, "assignedTo":req.body.assignedTo,"isDone":req.body.isDone!=null} };
                console.log(req.body);
                app.locals.db.collection('todos').updateOne(myquery, newvalues, (err, result)=> {
                    if (err) throw err;
                    console.log("1 document updated");
                    res.redirect("/");
                  });
            }
            else{
                app.locals.db.collection('todos').insertOne(req.body,(err,result)=>{
                    res.redirect("/");
                });
            }
            
        });
    };
})(module.exports);