const os=require('os');
var totalmem=os.totalmem();

console.log("Total memory " + totalmem);

//The same with template string
console.log(`Total memory ${totalmem}`);