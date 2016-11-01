
var requirejs = require('requirejs');


var chai = require('chai');
var expect = chai.expect;

var m = requirejs('module2');
 
describe('module 2', function() {
  describe('average operation', function() {
    it('you should be able to get average', function() {
      expect(m.average([10, 0])).to.eql(5);
    });
  });
});
 

