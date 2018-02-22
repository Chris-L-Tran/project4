const Movie = require('./movieSchema')

const seedData = require('./seedData.json')

Movie.remove({})
  .then(() => {
    return Movie.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
  })
