'use strict';
var browserSync = require('browser-sync');


var config = {
  server: {
    baseDir: 'app',
    directory: false
  },
  files: 'app/**',
  browser: 'google chrome'
};

browserSync(config, function(err) {
  if (!err) {
    console.log('BrowserSync is started!!!');
  }
});
