'use strict';
var browserSync = require('browser-sync');
var path = require('path');


process.argv.forEach(function(val,index,array){
  console.log(index+':'+val);
});

var file = process.argv[2];
var fileName = path.basename(file);
var dirName=path.dirname(file);
console.log('dir is '+file);
console.log('filename is '+dirName);


var config = {
  server: {
    baseDir: [ 'app',dirName ],
    directory: false
  },
  files: [ 'app/**',file ],
  browser: 'google chrome',
  startPath: '#/mdpreview/'+fileName 
};

browserSync(config, function(err) {
  if (!err) {
    console.log('BrowserSync is started!!!');
  }
});
