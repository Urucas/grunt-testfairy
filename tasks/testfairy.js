'use scrict'
var testfairy = require('TestFairyUploader.js')
module.exports = function(grunt) {
  grunt.registerMultiTask('testfairy', 'Upload apps to Tesfairy' function(){
    var done = this.async()
    testfairy(this.options(), function(err){
      if(err) {
        grunt.warn(err)
        return
      }
      done()
    })
  })
}
