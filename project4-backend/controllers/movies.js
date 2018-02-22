const express = require('express')
const Movie = require('../db/movieSchema')

const router = express.Router()

router.get('/', (req, res) => {
  Movie.find()
  .then(movie => res.json(movie))
  .catch(err => console.log(err))
})

module.exports = router
