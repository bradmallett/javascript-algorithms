const titleWords = require('../src/algorithms/titleWords');

describe('titleWords', () => {
    it('should throw an error if the input is not a string', () => {
        const actual = titleWords(7);

        expect(actual).toBe('you need a string');
    });

    it('should capitalize ONLY the beginning of each word', () => {
        const actual = titleWords('this iS mY sTrInG');

        expect(actual).toBe('This Is My String');
    });
});