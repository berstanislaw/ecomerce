let client = require('../server')

client.indices.delete({ index: 'gov' }, function(error, response, status) {
  console.log('delted', response)
})
