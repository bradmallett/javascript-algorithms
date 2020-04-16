const sliceSplice = require('../src/algorithms/sliceSplice');

describe('sliceSplice', () => {
    it('should throw an error if the first arg is not an array', () => {
        const actual = sliceSplice('hi', [4, 5, 6], 1);

        expect(actual).toBe('you need 2 arrays and a number');
    });

    it('should throw an error if the 2nd arg is not an array', () => {
        const actual = sliceSplice([4, 5, 6], 'hi', 1);

        expect(actual).toBe('you need 2 arrays and a number');
    });

    it('should throw an error if the 3rd arg is not a number', () => {
        const actual = sliceSplice([4, 5, 6], [4, 5, 6], 'hello');

        expect(actual).toBe('you need 2 arrays and a number');
    });

    it('should insert the first array into the second array starting at the number index', () => {
        const actual = sliceSplice(['a', 'b'], [1, 2], 1);
        
        expect(actual).toEqual([1, 'a', 'b', 2]);
    });
});