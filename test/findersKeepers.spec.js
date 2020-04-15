const findersKeepers = require('../src/algorithms/findersKeepers');

describe('findersKeepers', () => {
    it('should throw an error if the first input is not an array', () => {
        const actual = findersKeepers(7, 3);

        expect(actual).toBe('is not array');
    });

    it('should return the first element of the array that is true', () => {
        const actual = findersKeepers([6, 2, 3, 4], num => num % 2 === 0);

        expect(actual).toBe(6);
    });

    it('should return undefined if no elements are true', () => {
        const actual = findersKeepers([1, 3, 5, 9], num => num % 2 === 0);

        expect(actual).toBe(undefined);
    });
});