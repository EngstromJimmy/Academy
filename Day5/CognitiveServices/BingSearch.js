const https = require('https')
// ///// // Replace the accessKey string value with your valid access key.
const SUBSCRIPTION_KEY ='<accessKey>'


function bingWebSearch(query) {
  https.get({
    hostname: 'api.cognitive.microsoft.com',
    path:     '/bing/v7.0/search?q=' + encodeURIComponent(query),
    headers:  { 'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY },
  }, res => {
    let body = ''
    res.on('data', part => body += part)
    res.on('end', () => {
   
    console.dir(JSON.parse(body), { colors: false, depth: null })
    })
    res.on('error', e => {
      console.log('Error: ' + e.message)
      throw e
    })
  })
}
// ///// // Change the search if you want. Or type node filename.js apa (to search for monkeys)
const query = process.argv[2] || 'Academy by Academic Work'
bingWebSearch(query)