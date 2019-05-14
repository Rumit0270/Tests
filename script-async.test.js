const fetch = require('node-fetch');
const { getUsers } = require('./script-async');

it('should call jsontypicode api for users', () => {
    expect.assertions(1);
    return getUsers(fetch).then(data => {
        expect(data.count).toEqual(10);
    });
});