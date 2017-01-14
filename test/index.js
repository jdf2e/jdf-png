'use strict';
var pngquant = require("../");
var fs = require("fs");
var execFile = require('child_process').execFile;
var path = require("path");

execFile(pngquant, ['--version'], function(error, stdout, stderr) {
    if (error) {
        throw error;
    }
});

var testPath = path.join(__dirname, "1_mini.png");
if (fs.existsSync(testPath)) {
    fs.unlinkSync(testPath)
}

execFile(pngquant, ['-o', testPath, path.join(__dirname, "1.png")], error => {
    if (error) {
        throw error;
    }
});