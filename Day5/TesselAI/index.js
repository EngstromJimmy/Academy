'use strict';
const tessel=require("tessel");
const request = require('request');

// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = '<Subscription Key>';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase =
    'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze';

const imageUrl =
    'https://nodeacademy.azurewebsites.net/image2.jpg';

// const imageUrl =
//     'https://nodeacademy.azurewebsites.net/image1.jpg';

// Request parameters.
const params = {
    'visualFeatures': 'Categories,Description,Color',
    'details': '',
    'language': 'en'
};

const options = {
    uri: uriBase,
    qs: params,
    body: '{"url": ' + '"' + imageUrl + '"}',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
};

//Reset
for(var i=0;i<4;i++)
{
    tessel.led[i].off();
}

request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  let jsonObject = JSON.parse(body);
  const matchOn = 'raccoon'
  console.log(jsonObject);
  if( jsonObject.description.tags.indexOf(matchOn)>-1){
    tessel.led[2].on();
    console.log('Raccoon present');
  }
  else{
    tessel.led[0].on();
    console.log('No raccoons :(')
  }
});




