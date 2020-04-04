const findLongestWordLength = require('../src/algorithms/find-longest-word-length');

describe('findLongestWordLength', () => {
    it('should return the longest word', () => {
        const sentance = 'The quick brown fox jumped over the lazy dog';
        const actualLongest = findLongestWordLength(sentance);
        
        expect(actualLongest).toEqual('jumped');
    });

    it('should return an empty string if input is empty', () => {
        const actualLongest = findLongestWordLength();
        
        expect(actualLongest).toEqual('');
    });
});