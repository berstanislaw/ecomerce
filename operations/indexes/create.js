const { client } = require('../../server')

client.indices.create({ index: 'client' }, (error, response) => (error ? console.error(error) : console.log(response)))
client.indices.create(
  { index: 'products' },
  (error, response) => (error ? console.error(error) : console.log(response)),
)
