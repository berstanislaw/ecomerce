const fs = require('fs-extra')
const chunk = require('chunk')
const { client } = require('../../server')

async function example() {
  try {
    const dump = await fs.readJson('./data.json')
    const chunks = chunk(dump, 100)

    const results = chunks.map(piece => {
      const bulkActions = piece.map(item => [
        {
          create: {
            _index: item.index,
            _type: item.type,
            _id: item.id,
          },
        },
        item.body,
      ])
      const bulk = [].concat(...bulkActions)
      console.log('..', bulk.length)
      client.bulk({
        body: bulk,
      }, (error, response) => (error ? console.error(error) : console.log(response)))
    })
  
  } catch (error) {
    console.error(error)
  }
}

example()
