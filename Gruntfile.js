'use strict';
var mountFolder;

mountFolder = function(connect, dir) {
  return connect["static"](require('path').resolve(dir));
};

module.exports = function(grunt) {
  var yeomanConfig;
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  yeomanConfig = {
    src: 'src',
    dist: 'dist'
  };
  return grunt.initConfig({
    yeoman: yeomanConfig,
    uglify: {
      build: {
        src: '<%=yeoman.dist %>/angular-rest.js',
        dest: '<%=yeoman.dist %>/angular-rest.min.js'
      }
    }
  }, grunt.registerTask('default', ['uglify']));
};

// ---
// generated by coffee-script 1.9.2