let client = require('./server')

client.delete(
  {
    index: 'gov',
    id: '1',
    type: 'constituencies',
  },
  (error, response) => (error ? console.error(error) : console.log(response)),
)
