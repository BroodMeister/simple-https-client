function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
 https.get(requestOptions, function(response) {
    response.on('data', function(chunk) {
    console.log(chunk.toString(), '\n');
    });
  });
}

getAndPrintHTMLChunks();