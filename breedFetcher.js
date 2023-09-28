const request = require("request");

const input = process.argv;

request(`https://api.thecatapi.com/v1/breeds/search?q=${input[2]}`, (error, response, body) => {
  const data = JSON.parse(body);

  try {
    console.log(`Description: ${data[0].description}`);
  } catch (error) {
    console.error('Error:', error); // Print the error if one occurred

    if (data.length === 0) {
      console.log(`Breed not found: ${input[2]}`);
    }
  }
});

