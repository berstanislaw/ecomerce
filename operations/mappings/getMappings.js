const { client } = require('../../utils')

client.indices.getMapping(
  {
    index: 'client',
    type: '_doc',
  },
  (error, response) =>
    error ? console.error(error.message) : console.log('Mappings:\n', response.client.mappings._doc.properties),
)

client.indices.getMapping(
  {
    index: 'products',
    type: '_doc',
  },
  (error, response) =>
    error ? console.error(error.message) : console.log('Mappings:\n', response.products.mappings._doc.properties),
)
