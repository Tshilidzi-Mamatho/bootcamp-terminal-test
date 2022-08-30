import assert from "assert";
import fromWhere from "../fromWhere.js";

describe('fromWhere Function' , function(){
    it('should return Bellville for registration with CY.' , function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });

    it('should return Paarl for registration with CJ.' , function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
    });

    it('should return Cape Town for registration with CA.' , function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });

    it('should return Some other Place! for registration with CC.' , function(){
        assert.equal(fromWhere('CC'), 'Some other place!'); 
    });

});