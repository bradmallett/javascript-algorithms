const mutations = require('../src/algorithms/mutations');

describe('mutations', () => {
    it('should return false if all the letters in the second array are not in the first array', () => {
        const actual = mutations(["hello", "hey"]);

        expect(actual).toBe(false);
    });

    it('should return true if all the letters in the second array are in the first array', () => {
        const actual = mutations(["Mary", "Army"]);

        expect(actual).toBe(true);
    });

});