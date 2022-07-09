 
const sum = require("./index");


describe("Testing Sum function", ()=>{
    test('adding two positive numbers', () => { 
        expect(sum(5,5)).toBe(10);
     });
     test('adding one positive and one negative numbers', () => { 
        expect(sum(6,-5)).toBe(1);
     });
     test('adding two negative numbers', () => { 
        expect(sum(-3,-3)).toBe(-6);
     });
     test('getting negative numbers', () => { 
        expect(sum(4,-5)).toBe(-1);
     });
});