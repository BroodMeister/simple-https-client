var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getAndPrintHTMLChunks () {
  https.get(requestOptions, function(response) {
    response.on('data', function(chunk) {
      console.log(chunk.toString(), '\n');
    });
  });
}

getAndPrintHTMLChunks();