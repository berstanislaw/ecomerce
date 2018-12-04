const { app, bodyParser } = require('../../server')
const { client } = require('../../utils')

app.use(bodyParser.json())
app.post('/user', (request, response) => {
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
