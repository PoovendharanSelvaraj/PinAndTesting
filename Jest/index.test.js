 
const sum = require("./index");


describe("Testing Sum function", ()=>{
    test('adding two positive numbers', () => { 
        expect(sum(5,5)).toBe(10);
     });
     test('adding one positive and one negative numbers', () => { 
        expect(sum(6,-5)).toBe(1);
     });
     test('adding two negative numbers', () => { 
        expect(sum()).toBe("Sum invoked without arguments");
     });
     test('getting negative numbers', () => { 
        expect(sum(4)).toBe("Arguments length should be atleast 2");
     });
});

