const fruits = ['apple', 'banana', 'mango', 'grapes', 'peach'];

const searchFruit = (seachTerm, db) => {
    const matches = fruits.filter(fruit => fruit.toLowerCase() === seachTerm.toLowerCase());
    return matches;
};

console.log(searchFruit('apple', fruits));

module.exports = {
    searchFruit
};