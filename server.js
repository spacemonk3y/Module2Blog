const express    = require('express')
const bodyparser = require('body-parser')
const morgan     = require('morgan')
const index      = require('./routes/index')

const app = express()
app.use(bodyparser.json())
index(app)
app.listen(4000)