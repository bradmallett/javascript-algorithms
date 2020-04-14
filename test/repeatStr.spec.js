const repeatStr = require('../src/algorithms/repeatStr');

describe('repeatStr', () => {
    it('should throw an error if the first input is not a string', () => {
        const actual = repeatStr(7, 3);

        expect(actual).toBe('You entered something wrong.');
    });
    it('should throw an error if the second input is not a number', () => {
        const actual = repeatStr(7, '3');
        const error = 'You entered something wrong.';

        expect(actual).toBe(error);
    });
    it('should return an empty string if the number is <= 0', () => {
        const actual = repeatStr('yeldarb', 0);

        expect(actual).toBe('');
    });
});