const express = require('express')

const app = express()

app.set('port', process.env.PORT || 9000)

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(app.get('port'), () => {
  console.log(`Listening on PORT: ${app.get('port')}`)
})
