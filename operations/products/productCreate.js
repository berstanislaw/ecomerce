let client = require('../../server')

client.index(
  {
    index: 'product',
    id: '1',
    type: '_doc',
    body: {
      name: 'Panela',
      description: 'Uma panela bem maneira',
      cost: 1234.6,
      category: 'Utensilios',
      images: [
        {
          url:
            'https://a-static.mlcdn.com.br/618x463/panela-de-pressao-nigro-press-097019-aluminio-45l-vermelha/magazineluiza/144307100/bc44cefcc427cf239c2b6376cbed251f.jpg',
        },
        {
          url:
            'https://www.rochedo.com.br/medias/MAIN-405X345-Supreme-XR-PAN20.jpg?context=bWFzdGVyfGltYWdlc3wyNjc5OHxpbWFnZS9qcGVnfGltYWdlcy9oMGYvaGVkLzEwMzU0Njg1OTY4NDE0LmpwZ3xkYzE4NjZlM2Q2Yjc3MDVjN2M4NzJiODkxZTNmMmQ2YTJhMThhNjFjYzEwNTE5MDZlNmEyZmJhMTc2ZTllMmRl',
        },
      ],
    },
  },
  (error, response) => (error ? console.error(error) : console.log(response)),
)
