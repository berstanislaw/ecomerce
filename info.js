const { client } = require('./utils')

client.cluster.health({}, (error, response) => {
  if (error) {
    console.error(error)
  } else {
    console.log('---Client Health---')
    console.log(response)
  }
})

client.count({ index: 'client' }, (error, response) => (error ? console.error(error) : console.log('--- Clients ---',response.count)))
client.count({ index: 'products' }, (error, response) => (error ? console.error(error) : console.log('--- Products ---',response.count)))
