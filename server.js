const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const products = require('./operations/products')
const clients = require('./operations/clients')
const sales = require('./operations/sales')

app.use(bodyParser.json())
app.use('/product', products)
app.use('/client', clients)
app.use('/sale', sales)

app.listen(3000, () => {
  console.log('Servidor inciado na porta 3000')
})

module.exports = { app, bodyParser }
