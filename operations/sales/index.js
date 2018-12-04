const { client } = require('../../utils')
const express = require('express')
const router = express.Router()
const uuid = require('uuid/v4')

router.post('/', (request, response) => {
  const { id, totalValue, purchaseDate, quantity } = request.body
  const idClient = uuid()
  const idProduct = uuid()

  client.index(
    {
      index: 'sales',
      id,
      type: '_doc',
      body: {
        idClient,
        idProduct,
        totalValue,
        purchaseDate,
        quantity,
      },
    },
    (error, response) => (error ? console.error(error) : console.log(response)),
  )

  response.send({
    message: 'Data insert',
    idClient,
    idProduct,
    totalValue,
    purchaseDate,
    quantity,
  })
})

router.get(
  '/',
  (request,
  response => {
    const { search } = request.query

    client.search(
      {
        index: 'sale',
        size: 50,
        body: {
          query: {
            regexp: { purchaseDate: `.*?+` },
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
  }),
)
module.exports = router
