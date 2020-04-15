const booWho = require('../src/algorithms/booWho');

describe('booWho', () => {
    it('should return true if the value is a boolean', () => {
        const actual = booWho(true);

        expect(actual).toBe(true);
    });

    it('should return false if the value is not a boolean', () => {
        const actual = booWho(7);

        expect(actual).toBe(false);
    });
});