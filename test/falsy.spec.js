const falsy = require('../src/algorithms/falsy');

describe('falsy', () => {
    it('should take in an array', () => {
        const actual = falsy(7);

        expect(actual).toBe('you need an array');
    });
    it('should return an empty array if all values are falsy', () => {
        const actual = falsy([false, null, 0, NaN, undefined, ""]);
        
        expect(actual).toEqual([]);
    });

    it('should return an array of elements that are not falsy', () => {
        const actual = falsy([7, "ate", "", false, 9]);
        
        expect(actual).toEqual([7, 'ate', 9]);
    });

});