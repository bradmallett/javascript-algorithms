const change = require('../src/algorithms/change');

describe('change', () => {
    it('should return an array', () => {
        const actual = Array.isArray(change(56));

        expect(actual).toBe(true);
    });

    it('should return an array with an index of 4', () => {
        const actual = change(56);

        expect(actual.length).toBe(4);
    });

    it('should return an array of the quaters, nickles, dimes, and pennies it takes to count the number given', () => {
        const actual = change(56);

        expect(actual).toEqual([2, 0, 1, 1]);
    });

});