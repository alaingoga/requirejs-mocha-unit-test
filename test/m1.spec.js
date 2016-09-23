
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
 
