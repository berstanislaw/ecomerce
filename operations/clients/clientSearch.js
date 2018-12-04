const { app } = require('../../server')
const { client } = require('../../utils')


app.get('/client/q?', (request, response) => {
  const { path, search } = request.query

  client.search(
    {
      index: 'client',
      size: 50,
      body: {
        query:
          path === 'name'
            ? { regexp: { name: `${search}.*?+` } }
            : {
                nested: {
                  path,
                  score_mode: 'avg',
                  query: {
                    regexp: { 'phones.number': `${search}.*?+` },
                  },
                },
              },
      },
    },
    function(error, elasticsearchResponse) {
      if (error) {
        console.log('search error: ' + error)
      } else {
        console.log('--- Response ---')
        console.log(elasticsearchResponse)
        console.log('--- Hits ---', elasticsearchResponse.hits.hits.length)
        elasticsearchResponse.hits.hits.forEach(function(hit) {
          console.log(JSON.stringify(hit, null, 2))
        })
        response.send({
          results: elasticsearchResponse.hits.hits.length,
          message: elasticsearchResponse.hits.hits,
        })
      }
    },
  )
})
