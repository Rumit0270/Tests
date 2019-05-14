const { searchFruit } = require('./script');

const mockFruits = [
    'apple',
    'mango',
    'grapes',
    'orange'
];

describe('searchFruit test', () => {

    it('should find exactly one match', () => {
        expect(searchFruit('apple', mockFruits).length).toEqual(1)
    });

    it('should return an empty array', () => {
        expect(searchFruit('carrot', mockFruits)).toEqual([]);
    })

});

