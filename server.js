const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const elasticsearch = require('elasticsearch')

let client = new elasticsearch.Client({
  hosts: ['http://localhost:9200/'],
})

app.use(bodyParser.json())
app.post('/client', (request, response) => {
  const { name, lastName, cpf, birthDate, cellphoneNumber } = request.body

  response.send({
    message: 'Foi inserido...',
    name,
    lastName,
    cpf,
    birthDate,
    cellphoneNumber,
  })
})

app.use(bodyParser.json())
app.post('/cadastrarUsuario', (request, response) => {
  const { name, email, password } = request.body
})


app.listen(3000, () => {
  console.log('Servidor inciado na porta 3000')
})

module.exports = client
