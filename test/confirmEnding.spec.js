const confirmEnding = require('../src/algorithms/confirmEnding');
const Chance = require('chance');

const chance = new Chance();

describe('confirmEnding', () => {
    it('should return false if both inputs are not strings', () => {
        const str = chance.string();
        const number = chance.integer();

        const actual = confirmEnding(str, number);

        expect(actual).toBe(false);
    });

    it('confirm the ending of a string', () => {
        const actual = confirmEnding('Bastian', 'n');

        expect(actual).toBe(true);
    });

    it('should return false if the target does not confirm ending', () => {
        const actual = confirmEnding('Bastian', 'b');

        expect(actual).toBe(false);
    });
});