const chunkyMonkey = require('../src/algorithms/chunkyMonkey');

describe('chunkyMonkey', () => {
    it('should take in an array as the first arg', () => {
        const actual = chunkyMonkey(2, 2);

        expect(actual).toBe('you need an array and a number');
    });

    it('should take in a number as the second arg', () => {
        const actual = chunkyMonkey(2, ["a", "b", "c", "d"]);

        expect(actual).toBe('you need an array and a number');
    });

    it('should an array of arrays that are grouped by the number given', () => {
        const actual = chunkyMonkey([0, 1, 2, 3, 4, 5], 3);

        expect(actual).toEqual([[0, 1, 2], [3, 4, 5]]);
    });

});