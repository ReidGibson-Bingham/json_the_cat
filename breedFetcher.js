const request = require('request');

const breedCheck = (breedName) => {
  if (breedName === undefined || breedName === '' ) {
    console.log(`Breed name not found`);
  } else {
    console.log(`The ${breedName} is intense.`);
  }  
}

request('https://api.theatapi.com/v1/breeds/search.', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
  console.log(data[0]);// printing out the first entry in the data array for the user
  breedCheck(breedName);
});

let breedName = process.argv[2];

