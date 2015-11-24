'use scrict'
var path = require('path')
var config = require('./config.json')
module.exports = function(grunt) {
  grunt.initConfig({
    testfairy: {
      android: {
        options : {
          platform: "android", 
          api_key: config["api_key"],
          file: './test.apk',
          notify: 'on',
          groups: 'onlyme'
        }
      },
      ios: {
        options : {
          platform: "ios", 
          api_key: config["api_key"],
          file: './test.ipa'
        }
      }
    }
  })
  grunt.loadTasks('tasks')
  grunt.registerTask('default', 'testfairy');
}
