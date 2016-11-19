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
