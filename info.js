let client = require('./server')

client.cluster.health({}, (error, response) => {
  if (error) {
    console.error(error)
  } else {
    console.log('---Client Health---')
    console.log(response)
  }
})

client.count({ index: 'client' }, (error, response) => (error ? console.error(error) : console.log('--- Clients ---',response.count)))
