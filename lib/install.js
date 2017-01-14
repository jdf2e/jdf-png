'use strict';
var bin = require('./');
bin.run(['--version'], function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('pngquant pre-build test passed successfully');
    }
});
