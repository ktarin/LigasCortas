const mongoose = require('mongoose')

const connectionURL = require('../config.js').connectionURL
mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})






