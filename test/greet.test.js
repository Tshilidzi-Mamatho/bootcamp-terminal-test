import assert from "assert";
import greet from "../greet.js";

describe('greet Function' , function(){
    it('should greet Tshilidzi correctly' , function(){
        assert.equal(greet('Tshilidzi'), 'Hello, Tshilidzi');  
    });
    it('should greet Mamatho correctly' , function(){
        assert.equal(greet('Mamatho'), 'Hello, Mamatho');  
    });

});