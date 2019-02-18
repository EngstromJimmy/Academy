//This is a class
const EventEmitter = require("events");
const emitter=new EventEmitter();

//Register listener
emitter.on('messageLogged',(args)=>{
    console.log(`Listener called ${args.test}`);
});


//Raise an event
emitter.emit('messageLogged',{test:"apa"});



