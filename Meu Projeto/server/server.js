var util = require('util'),
    http = require('http'),
    fs = require('fs');

http
    .createServer(function(request, response) {  
        fs.readFile('web/index.html', function (err, html) {
            if (err) {
                throw err; 
            }
            response.writeHeader(200, {"Content-Type": "text/html"});  
            response.write(html);  
            response.end(); 
        });
    })
    .listen(80);
    util.puts('> Server is running');


