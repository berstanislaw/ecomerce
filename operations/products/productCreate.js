const { client, app, bodyParser } = require('../../server')

app.use(bodyParser.json())
app.post('/product', (request, response) => {
  const { id, name, description, cost, category, images } = request.body
  client.index({
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
  })

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
