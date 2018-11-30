let client = require('../../server')

client.search(
  {
    index: 'product',
    size: 50,
    body: {
      sort: {
        cost: { order: 'desc' },
      },
      query: {
        regexp: { name: '.*?+' },
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
