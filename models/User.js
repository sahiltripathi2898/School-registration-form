const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
      school_parent:{
        type:String,
        
      },
      name: {
        type:String
      },
      established_year: {
        type: Number
      },
      no_of_stud: {
        type: Number
      },
      brand: {
        type: String
      },
      email: {
        type: String
      },
      principal_name: {
        type: String
      },
      level_serviced: {
        type: String
      },
      address: {
        type: String
      },
      state: {
        type: String
      },
      district: {
        type: String
      },
      city: {
        type: String
      },
      postcode: {
        type: Number
      },
      contact: {
        type: String
      },
      contactno: {
        type: Number
      },
      contacttype: {
        type: String
      },
      classno: {
        type: Number
      },
      boardtype: {
        type: String
      },
})

module.exports = mongoose.model('users', UserSchema)
