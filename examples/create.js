let client = require('./server')

client.indices.create(
  {
    index: 'gov',
  },
  function(error, response, status) {
    if (error) {
      console.log(error)
    } else {
      console.log('create', response)
    }
  },
)
