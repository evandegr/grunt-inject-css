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
	var css = grunt.file.read(this.data.css);
	var text = '';
	var build_dest = this.data.build;
	/*
	if (css) {
		css.forEach(function (script) {
	        text += grunt.file.read(script);
	    });
	} else {
		grunt.log.error('Please specify a file to inject into the html.');
		return;
	}
	*/
	
	grunt.log.writeln('Preparing to inject css file');
	grunt.file.write(build_dest, grunt.file.read(this.data.html).replace('<!-- inject -->', '<style type="text/css">' + css + '</style>'));
	grunt.log.writeln('File injected'.blue + ' into ' + file.dest);
  });
};
