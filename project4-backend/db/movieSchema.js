const mongoose = require('./connection')

const MovieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  img_url: String,
  imdb: String,
  meta: String
})

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie
