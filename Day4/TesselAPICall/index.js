const request = require('request');
const tessel = require('tessel');
const climatelib = require('climate-si7020');
var climate = climatelib.use(tessel.port['A']);

climate.on('ready', ()=> 
{
  climate.readTemperature('c',(err, temp)=> 
  {
    climate.readHumidity((err, hum)=>
    {  
      const options = {
        uri: "https://academynode.azurewebsites.net/api",
        body: `{"location":"Tessel","temp":${temp.toFixed(1)},"hum":${hum.toFixed(1)} }`,
        headers: {'Content-Type': 'application/json'}
      };

      request.post(options, (error, response, body) => {
          //Did the request but not checking the result
      });
    });
  });     
});
