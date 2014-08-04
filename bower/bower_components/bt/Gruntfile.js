module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    },
    bower_concat: {
	  all: {
	    dest: 'src/bt.js',
	  }
    }    
  });

  // Loaded 'bower_concat' plugin.
  grunt.loadNpmTasks('grunt-bower-concat');
  // Loaded 'uglify' plugin.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // The default of exec list.
  grunt.registerTask('default', ['bower_concat', 'uglify']);

};