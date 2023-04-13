//completed with peer Kamila

const args = process.argv.slice(2);
const url = args[0];
const file = args[1];
// const fileSize = stats.fileSize
const request = require('request');

request(url, function(error, response, body) {
  let textWeWant = (error + response + response.statusCode + body);

  const fs = require('fs');
  fs.writeFile(file, textWeWant, err => {
    if (err) {
      console.error(err);
    }
  });
  console.log(`Downloaded and saved ${textWeWant.length} bytes to ${file}`);
});





