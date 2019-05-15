const fetch = require('node-fetch');
const { getUsers } = require('./script-async');

describe('Testing asychronous tests', () => {
    it('should call jsontypicode api for users', (done) => {
        // expect as assertion for async tests
        expect.assertions(1);
        getUsers(fetch).then(data => {
            expect(data.count).toEqual(10);
            // call done to indicate completion of test case
            done();
        });
    
        // or simply return the promise as
        // return getUsers(fetch).then(data => {
        //     expect(data.count).toEqual(10);
        //     // call done to indicate completion of test case
        //     done();
        // });
    });    
});


describe('Testing using mocks and spies', () => {
    // use mocks to mock the api request
    it('should get users and return count and results', () => {
        expect.assertions(4);

        const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
            json: () => Promise.resolve([
                {
                    'id': 1,
                    'name': 'John Doe'
                }, 
                {
                    'id': 2,
                    'name': 'Mary Bekker'
                }
            ])
        }));

        return getUsers(mockFetch).then(data => {
            expect(mockFetch.mock.calls.length).toBe(1);
            expect(mockFetch).toBeCalledWith('https://jsonplaceholder.typicode.com/users');
            expect(data.count).toEqual(2);
            console.log(data)
            expect(data.results.length).toBeGreaterThan(1);

        });
    });
});
