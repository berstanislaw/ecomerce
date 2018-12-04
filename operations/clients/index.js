const { client } = require('../../utils')
const express = require('express')
const router = express.Router()

router.post('/', (request, response) => {
  const { id, name, lastName, cpf, birthDate, phones } = request.body
  client.index({
    index: 'client',
    id,
    type: '_doc',
    body: {
      name,
      lastName,
      cpf,
      birthDate,
      phones,
    },
  })

  response.send({
    message: 'Data insert',
    id,
    name,
    lastName,
    cpf,
    birthDate,
    phones,
  })
})

router.get('/', (request, response) => {
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

module.exports = router
