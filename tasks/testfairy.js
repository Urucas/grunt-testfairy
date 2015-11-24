'use scrict'
var testfairy = require('../node_modules/testfairy/dist/TestFairyUploader.js')
module.exports = function(grunt) {
  grunt.registerMultiTask('testfairy', 'Upload apps to Tesfairy', function(){
    var done = this.async()
    console.log(this.options())
    /*
    testfairy(this.options(), function(err){
      if(err) {
        grunt.warn(err)
        return
      }
      done()
    })
    */
   done()
  })
}
