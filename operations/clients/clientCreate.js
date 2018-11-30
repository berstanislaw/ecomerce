let client = require('../../server')

client.index(
  {
    index: 'client',
    id: '1',
    type: 'normalClient',
    body: {
      name: 'Erin',
      lastName: 'M Hickey',
      cpf: '297.551.751-30',
      birthDate: '1972-11-30',
      phones: [
        {
          type: 'home',
          number: '925-642-2807',
        },
        {
          type: 'mobile',
          number: '510-393-4602',
        },
      ],
    },
  },
  (error, response) => (error ? console.error(error) : console.log(response)),
)
