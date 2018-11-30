let client = require('../../server')

client.indices.getMapping(
  {
    index: 'client',
    type: 'normalClient',
  },
  (error, response) =>
    error ? console.error(error.message) : console.log('Mappings:\n', response.client.mappings.normalClient.properties),
)

client.indices.getMapping(
  {
    index: 'products',
    type: '_doc',
  },
  (error, response) =>
    error ? console.error(error.message) : console.log('Mappings:\n', response.products.mappings._doc.properties),
)
