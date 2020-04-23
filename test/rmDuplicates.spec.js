const rmDuplicates = require('../src/algorithms/rmDuplicates');

describe('rmDuplicates', () => {
    it('should remove any duplicate values', () => {
        const actual = rmDuplicates([1, 2, 3, 4, 2, 5]);

        expect(actual).toEqual([1, 2, 3, 4, 5]);
    });

});