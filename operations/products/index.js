const { client } = require('../../utils')
const express = require('express')
const router = express.Router()

router.post('/', (request, response) => {
  const { id, name, description, cost, category, images } = request.body
  client.index(
    {
      index: 'products',
      id,
      type: '_doc',
      body: {
        name,
        description,
        cost,
        category,
        images,
      },
    },
    (error, response) => (error ? console.error(error) : console.log(response)),
  )

  response.send({
    message: 'Data insert',
    id,
    name,
    description,
    cost,
    category,
    images,
  })
})

router.get('/', (request, response) => {
  const { search } = request.query

  client.search(
    {
      index: 'products',
      size: 50,
      body: {
        query: {
          regexp: { name: `${search}.*?+` },
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

module.exports = router
