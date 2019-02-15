var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("MONGOCONNECTIONSTRING", {useNewUrlParser: true},function (err, client) {
    
     var db = client.db('tododb');
    // db.collection('todos').insertOne( 
    //     {
    //         text:"Do some fun stuff",
    //         isDone:false,
    //         assignedTo:"Jimmy Engström"
    //     }
    // );
    var todos;
    var cursor = db.collection('todos').find({isDone:false});
    cursor.toArray((err,data)=>
    {
      todos=data;
      console.log(todos);  
    });
  
    

  client.close();
});