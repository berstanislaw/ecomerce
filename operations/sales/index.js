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
      index: 'client',
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
    cpf,
    purchaseDate,
    quantity,
  })
})

module.exports = router
