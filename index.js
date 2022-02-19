// this file will be the one that users can run and provide the breed name to. it will then require the breedFetcher file and call its exported function (module.exports)

const { fetchBreedDescription } = require('./breedFetcher.js');

//const breedName = process.argv[2];
const breedName = 'process.argv[2]';

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});