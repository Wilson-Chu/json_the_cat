const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    try {
      const data = JSON.parse(body);

      if (data.length === 0) {
        callback(`Breed not found: ${breedName}`, null);
      } else {
        callback(null, data[0].description);
      }
    } catch (error) {
      callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };