var express = require('express');                                                                                                                          

var fs = require('fs');                                                                                                                                    

var buf = new Buffer(256);                                                                                                                                 

var app = express.createServer(express.logger());
var infile = "index.html";                                                                                                                                 

app.get('/', function(request, response) {
    buf = fs.readFileSync(infile,'utf-8');                                                                                                                 
    response.send(buf.toString());                                                                                                                         
});                                                                                                                                                        
var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});








