const { client } = require('../../server')

client.search(
  {
    index: 'client',
    size: 50,
    body: {
      query: {
        nested: {
          path: 'phones',
          score_mode: 'avg',
          query: {
            regexp: { 'phones.type': 'no.*?+' },
          },
        },
      },
    },
  },
  function(error, response) {
    if (error) {
      console.log('search error: ' + error)
    } else {
      console.log('--- Response ---')
      console.log(response)
      console.log('--- Hits ---', response.hits.hits.length)
      response.hits.hits.forEach(function(hit) {
        console.log(JSON.stringify(hit, null, 2))
      })
    }
  },
)
