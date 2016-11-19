'use strict';
/* eslint-env mocha */
var assert = require('assert');
var execFile = require('child_process').execFile;
var fs = require('fs');
var path = require('path');
var binCheck = require('bin-check');
var BinBuild = require('bin-build');
var compareSize = require('compare-size');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');

var tmp = path.join(__dirname, 'tmp');

beforeEach(function (cb) {
	mkdirp(tmp, cb);
});

afterEach(function (cb) {
	rimraf(tmp, cb);
});

it('rebuild the pngquant binaries', function (cb) {
	this.timeout(20000);

	new BinBuild()
		.src('https://github.com/pornel/pngquant/archive/2.7.1.tar.gz')
		.cmd('rm ./INSTALL')
		.cmd('./configure --prefix="' + tmp + '"')
		.cmd('make install BINPREFIX="' + tmp + '"')
		.run(function (err) {
			if (err) {
				cb(err);
				return;
			}

			fs.stat(path.join(tmp, 'pngquant'), function (err, stats) {
				if (err) {
					cb(err);
					return;
				}

				assert(stats.isFile());
				cb();
			});
		});
});

it('return path to binary and verify that it is working', function (cb) {
	binCheck(require('../'), ['--version'], function (err, works) {
		if (err) {
			cb(err);
			return;
		}

		assert(works);
		cb();
	});
});

it('minify a PNG', function (cb) {
	var src = path.join(__dirname, 'fixtures/test.png');
	var dest = path.join(tmp, 'test.png');
	var args = [
		'-o', dest,
		src
	];

	execFile(require('../'), args, function (err) {
		if (err) {
			cb(err);
			return;
		}

		compareSize(src, dest, function (err, res) {
			if (err) {
				cb(err);
				return;
			}

			assert(res[dest] < res[src]);
			cb();
		});
	});
});
