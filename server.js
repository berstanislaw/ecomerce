const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const elasticsearch = require('elasticsearch')

let client = new elasticsearch.Client({
  hosts: ['http://localhost:9200/'],
})

app.use(bodyParser.json())
app.post('/cadastrarProduto', (request, response) => {
  const { id, name, description, cost, category, images } = request.body
  client.index(
    {
      index: 'product',
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

app.use(bodyParser.json())
app.post('/cadastrarUsuario', (request, response) => {
  const { id, name, lastName, cpf, birthDate, phones } = request.body
  client.index(
    {
      index: 'client',
      id,
      type: 'normalClient',
      body: {
        name,
        lastName,
        cpf,
        birthDate,
        phones,
      },
    },
    (error, response) => (error ? console.error(error) : console.log(response)),
  )

  response.send({
    message: 'Data insert',
    id,
    type,
    name,
    lastName,
    cpf,
    birthDate,
    phones,
  })
})

app.listen(3000, () => {
  console.log('Servidor inciado na porta 3000')
})

module.exports = client
