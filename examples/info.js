let client = require('./server')

client.cluster.health({}, function(error, response, status) {
  console.log('-- Client Health --', response)
})

client.count(
  { index: 'gov', type: 'constituencies' },
  (error, response) => (error ? console.error(error) : console.log(response)),
)
