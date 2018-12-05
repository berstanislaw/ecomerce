const { client } = require('../../utils')

client.indices.putMapping(
  {
    index: 'client',
    type: '_doc',
    body: {
      properties: {
        name: {
          type: 'text',
          index: true,
        },
        lastName: {
          type: 'text',
          index: true,
        },
        cpf: {
          type: 'text',
          index: true,
        },
        birthDate: { type: 'date' },
        phones: {
          type: 'nested',
          properties: {
            type: { type: 'text' },
            number: { type: 'text' },
          },
        },
      },
    },
  },
  (error, response) => (error ? console.error(error) : console.log(response)),
)

client.indices.putMapping(
  {
    index: 'products',
    type: '_doc',
    body: {
      properties: {
        name: {
          type: 'text',
          index: true,
        },
        description: {
          type: 'text',
          index: true,
        },
        cost: {
          type: 'double',
          index: true,
        },
        category: {
          type: 'text',
          index: true,
        },
        images: {
          type: 'nested',
          properties: {
            url: { type: 'text' },
          },
        },
      },
    },
  },
  (error, response) => (error ? console.error(error) : console.log(response)),
)

client.indices.putMapping(
  {
    index: 'sales',
    type: '_doc',
    body: {
      properties: {
        
      },
    },
  },
  (error, response) => (error ? console.error(error) : console.log(response)),
)
