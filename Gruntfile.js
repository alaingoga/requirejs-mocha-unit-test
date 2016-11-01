module.exports = function(grunt) {

    // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.initConfig({

    // Mocha
    mochaTest: {
      test: {
        options: {
          require: ['test/test-init.js']
        },
        src: ['test/*.js']
      }
    }
  });

  grunt.registerTask('default', 'mochaTest');

};
