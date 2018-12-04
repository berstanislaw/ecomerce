const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const elasticsearch = require('elasticsearch')

const client = new elasticsearch.Client({
  hosts: ['http://localhost:9200/'],
})

app.listen(3000, () => {
  console.log('Servidor inciado na porta 3000')
})

module.exports = { client, app, bodyParser }
