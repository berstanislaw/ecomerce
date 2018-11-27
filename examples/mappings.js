let client = require('./server')

client.indices.putMapping(
  {
    index: 'gov',
    type: 'constituencies',
    body: {
      properties: {
        constituencyname: {
          type: 'keyword',
          index: true,
        },
        electorate: { type: 'integer' },
        validvotes: { type: 'integer' },
      },
    },
  },
  (error, response) => (error ? console.error(error) : console.log(response)),
)
