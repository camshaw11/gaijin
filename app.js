const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('test to see if my server is reloading changes!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
