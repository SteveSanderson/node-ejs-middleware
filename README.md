node-ejs-middleware
===================

Handles requests that match a `*.ejs` file by rendering that file. Example usage:

    var app = require('express').createServer(),
        ejsMiddleware = require('ejs-middleware');
    
    app.configure(function() {      
        app.use(ejsMiddleware(__dirname + '/static'));
    }).listen(process.env.port || 3000);
  
Now for each incoming request, Node will look for a matching file under `/static`. Examples:

 * Request for `/` will match `yourapp/static/index.ejs`
 * Request for `/some/file` will match `yourapp/static/some/file.ejs`
 * Request for `/some/dir` will match `yourapp/static/some/dir/index.ejs`
 
Notice that, if the request matches a directory, ejsMiddleware appends `index` automatically. Then, in all cases, it appends `.ejs`. If there is such a file, it will be rendered out to the response. If there's no such file, ejsMiddleware does nothing, and your subsequent handlers can process the request.

### Support

This is completely unsupported. No support questions, please! Seriously, it's only about 10 lines of code long, so if it doesn't do what you want, just grab the code and make your own modifications.