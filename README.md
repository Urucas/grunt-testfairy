# grunt-testfairy
Upload and distribute your apk(ipa) builds to [Testfairy](https://testfairy.com/) via grunt tasks

#Install
```npm install --save grunt-testfairy```

#Usage
```javascript
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
  require('load-grunt-tasks')(grunt);
  grunt.registerTask('default', 'testfairy');
}
```

Run the task

<img src="https://raw.githubusercontent.com/Urucas/grunt-testfairy/master/screen.png">

#Options
See [testfairy](https://github.com/Urucas/testfairy) module options
