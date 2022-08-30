import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe('yearsAgo Function' , function(){
    it('should take in a year and ruturn how long ago from current year' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });

});