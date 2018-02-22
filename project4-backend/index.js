const express = require('express')

const movies = require('./controllers/movies')
const app = express()

app.set('port', process.env.PORT || 9000)

app.use('/', movies)

app.listen(app.get('port'), () => {
  console.log(`Listening on PORT: ${app.get('port')}`)
})
