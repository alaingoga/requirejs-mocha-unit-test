# Requirejs - Mocha - Grunt Unit Test

### Overview

Simple example to unit test Requirejs modules using Mocha - Chai and Grunt.

### Node modules required


 * [grunt-mocha-require-phantom](https://www.npmjs.com/package/grunt-mocha-require-phantom)
 * [grunt-mocha-test](https://www.npmjs.com/package/grunt-mocha-test)
 * [requirejs](https://www.npmjs.com/package/requirejs)

### Getting Started

First let's create two simple modules that based on array calculates sum and average:

Module1.js

```javascript
define(function(){
  return {
    sum: function(arr){
    	if (arr instanceof Array){
    		var total = arr.reduce(function(a, b) {
			  return a + b;
			}, 0);
			return total;
    	} else {
    		return null;
    	}
      
    }
  }
});
```

Module2.js

```javascript
define(['module1'], function(m1){
  return {
    average: function(arr){
    	if (arr instanceof Array){
    		return m1.sum(arr)/arr.length;
    	} else {
    		return null
    	}
    
    }
  }
});
```

and the config.js


```javascript
requirejs.config({
	path: {
		'module1': 'module1.js',
		'module2': 'module2.js'
	}
});
```

Now we are creating two files under test for the correspondet tests:

test/m1.spec.js

```javascript
var requirejs = require('requirejs');
var m = requirejs('module1');
var chai = require('chai');
var expect = chai.expect;

describe('module 1', function() {
    describe('sum operation 2', function() {
      it('you should be able to sum', function() {
        expect(m.sum([2,1,4])).to.eql(7);
      });
    });
});
```

test/m2.spec.js

```javascript
var requirejs = require('requirejs');
var m = requirejs('module2');
var chai = require('chai');
var expect = chai.expect;
 
describe('module 2', function() {
  describe('average operation', function() {
    it('you should be able to get average', function() {
      expect(m.average([10, 0])).to.eql(5);
    });
  });
});
```

It's time to configure our task in grunt to automate the process. The module that orchestrates the test is [mochaTest](https://www.npmjs.com/package/grunt-mocha-test).

```javascript
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
```

For proper initialization a test-init.js file needs to be required first. To  configure the requirejs node.

```javascript
var requirejs = require('requirejs');

requirejs.config({
    //Use node's special variable __dirname to
    //get the directory containing this file.
    //Useful if building a library that will
    //be used in node but does not require the
    //use of node outside
    baseUrl: __dirname,

    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require,


    paths: {
      'module1': '../module1',
      'module2': '../module2'
    }
});
```

At this point we should be ready to run our grunt task: `$ grunt`
and get something like this: 

```sh
Running "mochaTest:test" (mochaTest) task


  module 1
    sum operation 2
      ✓ you should be able to sum

  module 2
    average operation
      ✓ you should be able to get average


  2 passing (7ms)

```

In fact what we are doing is using the requirejs modules as node modules and injecting them for the correspondent test. 

### Enjoy!


