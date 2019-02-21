const tessel = require('tessel');
const climatelib = require('climate-si7020');
const fetch = require("fetch-node");

var climate = climatelib.use(tessel.port['A']);

climate.on('ready', ()=> 
  {
    climate.readTemperature('c',(err, temp)=> 
    {
        climate.readHumidity((err, hum)=>
        {
          console.log('Degrees:', temp.toFixed(1) + 'C', 'Humidity:', hum.toFixed(1) + '%RH');
          const body = { "location":"Jimmy","temp":13,"hum":37 };
          var request = require('request');

          request.post(
            'http://www.google.com',
            { json: { key: 'value' } },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log(body)
                }
            });
        });
    });
  });