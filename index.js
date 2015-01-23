#!/usr/bin/env node

'use strict';
if (process.argv.length !== 3) {
    console.log('usage: md-preview [markdown file]');
    return;
}

var file = process.argv[2];

var suffix = '.md';

if (file.indexOf(suffix, this.length - suffix.length) === -1) {
    console.log('file name msut be .md file');
    return;
}


var browserSync = require('browser-sync');
var path = require('path');



var fileName = path.basename(file);
var dirName = path.dirname(file);

if (dirName === '.') {
    dirName = process.cwd();
}
console.log('dir is ' + dirName);
console.log('filename is ' + fileName);


var config = {
    server: {
        baseDir: [__dirname+path.sep+'app', dirName],
        directory: false
    },
    files: ['app'+path.sep+'**', file],
    browser: 'google chrome',
    startPath: '#/mdpreview/' + fileName
};

browserSync(config, function(err) {
    if (!err) {
        console.log('BrowserSync is started!!!');
    }
});
