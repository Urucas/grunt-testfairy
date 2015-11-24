'use scrict'
var TestFairyUploader = require('../node_modules/testfairy/dist/TestFairyUploader.js')
module.exports = function(grunt) {
  grunt.registerMultiTask('testfairy', 'Upload apps to Tesfairy', function(){
    grunt.log.writeln("Uploading app to testfairy, this may take a while!");
    var uploader = new TestFairyUploader(this.options())
    var response = uploader.run()
    if(response[0] != null) {
      grunt.warn(err)
	  return
    }
    console.log(response[1]);
  })
}
