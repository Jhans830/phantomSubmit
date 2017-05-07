// import the webserver module, and create a server
var server = require('webserver').create();
var port = require('system').env.PORT || 8080; // default back to 8080

// start a server on port 8080 and register a request listener
server.listen(port, function(request, response) {

 console.log('Loading a web page');
var page = require('webpage').create();
var url = 'http://pages.s4.exacttarget.com/page.aspx?QS=472529ec60bdf32ace076b30a52580087daefea3fc019925f12fc53d64ba4a21';
page.open(url, function (status) {
    //Page is loaded!
    page.render('phantomjs.png');
    phantom.exit();
  });
});