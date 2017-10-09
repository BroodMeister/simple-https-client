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

function getAndPrintHTML() {
  https.get(requestOptions, function(response) {
    var buff = '';
    response.on('data', function(chunk) {
      buff += chunk.toString();
    });
    response.on('end', function() {
      console.log(buff);
    });
  });
}

getAndPrintHTML();