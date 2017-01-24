var assert = require("assert"); // core module
var C = require('../cash.js');  // our module

describe('Cash Register', function(){
  describe('Module C', function(){
    it('should have a getChange Method', function(){  //There must be a getChange Method in Module C -(cash.js).
      assert.equal(typeof C, 'object');               //c must be of type object.
      assert.equal(typeof C.getChange, 'function');   //c.getChange must be of type function.
    })
	
	it('getChange(210,300) should equal [50,20,20]', function(){
    assert.deepEqual(C.getChange(210,300), [50,20,20]);          //deepEqual must be used for arrays and not just a plain equal function.
    })
	
	it('getChange(486,1000) should equal [500, 10, 2, 2]', function(){
    assert.deepEqual(C.getChange(486,1000), [500, 10, 2, 2]);
    })
	
	it('getChange(1487,10000) should equal [5000, 2000, 1000, 500, 10, 2, 1 ]', function(){
    assert.deepEqual(C.getChange(1487,10000), [5000, 2000, 1000, 500, 10, 2, 1 ]);
    });
	
  })
});  