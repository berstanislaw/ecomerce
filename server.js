const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const products = require('./operations/products')
const clients = require('./operations/clients')

app.use(bodyParser.json())
app.use('/product', products)
app.use('/client', clients)

app.listen(3000, () => {
  console.log('Servidor inciado na porta 3000')
})

module.exports = { app, bodyParser }
