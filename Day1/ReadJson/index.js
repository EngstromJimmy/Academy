var fs = require('fs');

fs.readFile('customers.json', 'utf8', function (err, data) {
    if (err) throw err; // we'll not consider error handling for now
    var obj = JSON.parse(data);
    console.log(obj);


    var filtered=obj.filter((customer,i)=>customer.id===1);
    console.log(filtered);
});