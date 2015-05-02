'use strict';

module.exports = function (grunt) {
  var browserifyFiles = { 'dist/bundle.min.js': ['js/index.js'] };

  grunt.initConfig({
    // Browserify JS
    browserify: {
      dev: {
        files: browserifyFiles,
        options: { debug: true }
      },
      release: {
        files: browserifyFiles,
        options: { debug: false }
      },
    },
    // Combine/Minify CSS
    cssmin: {
      combine: {
        files: {
          'dist/bundle.min.css': ['css/lib/*.css', 'css/*.css']
        }
      }
    },
    copy: {
      main: {
        expand: true,
        src: 'js/lib/**/*.js',
        dest: 'dist/',
        flatten: true,
        filter: 'isFile',
      },
    },
    // Watch for changes
    watch: {
      files: ['css/*', 'js/**/*'],
      tasks: ['cssmin', 'browserify:dev', 'copy']
    }
  });


  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('dev', ['cssmin', 'browserify:dev']);
  grunt.registerTask('release', ['cssmin', 'browserify:release', 'copy']);
};