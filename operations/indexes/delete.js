const { client } = require('../../server')

client.indices.delete({ index: 'client' }, (error, response)  => (error ? console.error(error) : console.log(response)))
client.indices.delete({ index: 'products' }, (error, response) => (error ? console.error(error) : console.log(response)))
