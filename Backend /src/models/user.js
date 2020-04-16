const validator = require('validator')
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number,
    required: true,
    validate(value) {
      if ( value < 18 ) {
        throw new Error('Debes ser mayor de 18 años')
      }
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if( !validator.isEmail(value) ) {
        throw new Error('Email invalido')
      }
    }
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minlength: 3
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
