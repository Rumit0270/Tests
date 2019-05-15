const fetch = require('node-fetch');

const getUsers = (fetch) => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            return {
                count: data.length,
                results: data
            }
        });
}

getUsers(fetch).then(res => console.log("Completed"))

module.exports = {
    getUsers
}