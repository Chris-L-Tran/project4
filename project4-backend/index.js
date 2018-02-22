const express = require('express')
const cors = require('cors')()

const movies = require('./controllers/movies')
const app = express()

app.use(cors)

app.set('port', process.env.PORT || 9000)

app.use('/', movies)

app.listen(app.get('port'), () => {
  console.log(`Listening on PORT: ${app.get('port')}`)
})
