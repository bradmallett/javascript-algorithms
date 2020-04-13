const findLargestNum = require('../src/algorithms/find-largest-num');

describe('findLargestNum', () => {
    it('should return an array', () => {
        const actual = findLargestNum([[1], [3, 5], [9999, 2]]);

        expect(Array.isArray(actual)).toBe(true);
    });

    it('should return an array of the largest numbers of each nested array', () => {
        const numbers = [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]];
        const expectedNumbers = [25, 48, 21, -3];

        const actual = findLargestNum(numbers);

        expect(actual).toEqual(expectedNumbers);
    });

    it('should throw an error if no input given', () => {
        const actual = findLargestNum();

        expect(actual).toEqual('You gotta enter something...');
    });

    it('should throw an error if no input in given array', () => {
        const actual = findLargestNum([]);

        expect(actual).toEqual('You gotta enter something...');
    });
});