const time = require('./TimeConversion');



describe("Testing TimeConversion function", ()=>{
    test('converting milliseconds to seconds', () => { 
        expect(time(5200)).toBe(5);
     });

    });
