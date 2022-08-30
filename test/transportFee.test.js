import assert from "assert";
import transportFee from "../transportFee.js";

describe('transportFee Function' , function(){
    it('should return R20 for morning.' , function(){
        assert.equal(transportFee('morning'), 'R20');
    });

    it('should return R10 for afternoon.' , function(){
     assert.equal(transportFee('afternoon'), 'R10');
    });

    it('should return free for nightshift' , function(){
        assert.equal(transportFee('nightshift'), 'free');
    });
});