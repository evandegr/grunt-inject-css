/*
 * grunt-inject-css
 * https://github.com/evandegr/grunt-inject-css
 *
 * Copyright (c) 2014 Evan Vandegriff
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('inject_css', 'Allows you to inject CSS into HTML files as part of the build process.', function() {
	  grunt.log.writeln('starting task...');
	var src = grunt.file.expand(this.data.src);
	var expandedFiles = grunt.file.expand(this.data.files);
	var text = '';

	if (src) {
		src.forEach(function (script) {
	        text += grunt.file.read(script);
	    });
	} else {
		grunt.log.error('Please specify a file to inject into the html.');
		return;
	}
	
	grunt.log.writeln('Got the source text');

	expandedFiles.forEach(function (file) {
		grunt.log.writeln('Preparing to inject css file');
	    grunt.file.write(file.dest, grunt.file.read(file.src).replace('<!-- inject -->', '<style type="text/css">' + text + '</style>'));
	    grunt.log.writeln('File injected'.blue + ' into ' + file.dest);
	});
  });
};
