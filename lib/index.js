'use strict';
var path = require('path');
var BinWrapper = require('bin-wrapper');
var pkg = require('../package.json');
var url = 'https://raw.githubusercontent.com/jdf2e/jdf-png/master/vendor/';

module.exports = new BinWrapper()
	.src(url + 'macos/pngquant', 'darwin')
	.src(url + 'linux/x86/pngquant', 'linux', 'x86')
	.src(url + 'linux/x64/pngquant', 'linux', 'x64')
	.src(url + 'freebsd/x64/pngquant', 'freebsd', 'x64')
	.src(url + 'win/pngquant.exe', 'win32')
	.dest(path.join(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'pngquant.exe' : 'pngquant');
