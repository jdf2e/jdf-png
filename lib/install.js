'use strict';
var bin = require('./');
bin.run(['--version'], function (err) {
	console.log('pngquant pre-build test passed successfully');
});
