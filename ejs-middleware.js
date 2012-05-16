var url = require('url'),
    fs = require('fs'),
    path = require('path'),
    defaultExtension = 'ejs';

module.exports = function(dir, extension) {
    return function(req, res, next) {
        var pathname = path.join(dir, url.parse(req.url).pathname);
        extension = extension || defaultExtension;

        fs.lstat(pathname, function(err, stats) {
            // Requests that match /dir will be interpreted as /dir/index
            if(!err && stats.isDirectory()) {
                pathname = path.join(pathname, 'index');
            }
            pathname += '.' + extension;

            fs.lstat(pathname, function(err, stats) {
                if(!err && stats.isFile()) {
                    res.render(pathname);
                } else {
                    next();
                }
            });
        });
    };
};