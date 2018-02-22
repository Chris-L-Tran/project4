const mongoose = require('mongoose')

if (process.env.NODE_ENV === 'production') {
  mongoose
  .connect(process.env.MLAB_URL, { useMongoClient: true })
  .catch(err => console.log(err))
} else {
  mongoose
  .connect('mongodb://localhost/marvel', { useMongoClient: true })
  .catch(err => console.log(err))
}

mongoose.Promise = Promise

module.exports = mongoose
