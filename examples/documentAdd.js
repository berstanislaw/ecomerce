let client = require('./server')

client.index(
  {
    index: 'gov',
    id: '1',
    type: 'constituencies',
    body: {
      ConstituencyName: 'Ipswich',
      ConstituencyID: 'E14000761',
      ConstituencyType: 'Borough',
      Electorate: 74499,
      ValidVotes: 48694,
    },
  },
  (error, response) => (error ? console.error(error) : console.log(response)),
)
