import assert from "assert";
import isWeekday from "../isWeekday.js";

describe('isWeekday Function' , function(){
    it('should return false Saturday is not a week day' , function(){
        assert.equal(isWeekday('Saturday'), false);
    });
    it('should return false Sunday is not a week day' , function(){
        assert.equal(isWeekday('Sunday'), false);
    });

    it('should return true Monday is a week day' , function(){
        assert.equal(isWeekday('Monday'), true);
    });

    it('should return true Tuesday is a week day' , function(){
     assert.equal(isWeekday('Tuesday'), true); 
    });

    it('should return true Wednesday is a week day' , function(){
        assert.equal(isWeekday('Wednesday'), true);
    });

    it('should return true Thursday is a week day' , function(){
        assert.equal(isWeekday('Thursday'), true); 
    });

    it('should return true Friday is a week day' , function(){
        assert.equal(isWeekday('Friday'), true);
    });
});