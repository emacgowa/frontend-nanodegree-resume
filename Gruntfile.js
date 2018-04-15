module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 400,
            suffix: '_medium_1x',
            quality: 90
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png,JPG}'],
          cwd: 'images/',
          dest: 'images/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
