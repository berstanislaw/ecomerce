let client = require('./server')

client.indices.getMapping(
  {
    index: 'gov',
    type: 'constituencies',
  },
  (error, response) =>
    error ? console.error(error.message) : console.log('Mappings:\n', response.gov.mappings.constituencies.properties),
)
