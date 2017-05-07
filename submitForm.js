// import the webserver module, and create a server
var server = require('webserver').create();
var port = require('system').env.PORT || 8080; // default back to 8080

// start a server on port 8080 and register a request listener
server.listen(port, function(request, response) {

var page = require('webpage').create();

page.open('URL WITH FORM', function() {
        page.evaluate(function() {
            document.forms[0].submit();
        });
});
  });
