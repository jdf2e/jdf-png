[![NPM](https://nodei.co/npm/jdf-png.png?downloads=true)](https://nodei.co/npm/jdf-png/)

[![NPM version](https://badge.fury.io/js/jdf-png.png)](http://badge.fury.io/js/jdf-png) [![Build Status](https://travis-ci.org/jdf2e/jdf-png.svg?branch=master)](https://travis-ci.org/jdf2e/jdf-png)

# jdf-png

> A pngquant wrapper for JDF


## Install

```
$ npm install --save jdf-png
```


## Usage

```js
const execFile = require('child_process').execFile;
const pngquant = require('jdf-png');

execFile(pngquant, ['-o', 'output.png', 'input.png'], err => {
	console.log('Image minified!');
});
```


## CLI

```
$ npm install --global jdf-png
```

```
$ jdf-png --help
```
