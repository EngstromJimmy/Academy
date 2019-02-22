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
            uri: "http://academynode.azurewebsites.net/api",
            //qs: params,
            body: `{"location":"Jimmy","temp":13,"hum":37 }`,
            headers: {'Content-Type': 'application/json'}
        };

          request.post(options, (error, response, body) => {
            if (error) {
              console.log('Error: ', error);
              return;
            }
            let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
            console.log('JSON Response\n');
            console.log(jsonResponse);
          });
         
        });
    });
  });
