//This is a class
const EventEmitter = require("events");
class MyEvent extends EventEmitter
{
    readFile()
    {
        var fs = require('fs');
        fs.readFile('customers.json', 'utf8',  (err, data)=> {
        if (err) throw err; // we'll not consider error handling for now
        var obj = JSON.parse(data);
        this.emit("FileRead",{"fileContent":obj})
        });

    }
}
module.exports=MyEvent;



