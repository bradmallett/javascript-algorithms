const belong = require('../src/algorithms/belong');

describe('belong', () => {
    it('should throw an error if the first input is not an array', () => {
        const actual = belong(false, 8);

        expect(actual).toBe('You need an array and a number');
    });

    it('should throw an error if the second input is not a number', () => {
        const actual = belong([1, 2, 3, 4,], true);

        expect(actual).toBe('You need an array and a number');
    });

    it('should return the index of where the number fits', () => {
        const actual = belong([10, 20, 30, 40, 50], 30);

        expect(actual).toBe(2);
    });

    it('should return the last index if the number does not fit', () => {
        const actual = belong([10, 20, 30, 40, 50], 60);

        expect(actual).toBe(5);
    });

});