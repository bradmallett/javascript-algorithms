const truncateStr = require('../src/algorithms/truncateStr');

describe('truncateStr', () => {
    it('should throw an error if first arg is not a string', () => {
        const actual = truncateStr(7, 3);

        expect(actual).toBe('You need a string then a number');
    });
    it('should throw an error if the 2nd arg is not a number', () => {
        const actual = truncateStr('hello world', '3');

        expect(actual).toBe('You need a string then a number');
    });
    it('should return same string if the number is larger than the string', () => {
        const actual = truncateStr('hello world', 11);

        expect(actual).toBe('hello world');
    });
    it('should truncate the string if the the number is less than or equal to the string', () => {
        const actual = truncateStr('hello world', 5);

        expect(actual).toBe('hello...');
    });
});