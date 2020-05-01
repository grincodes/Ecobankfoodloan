const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//create  schema
const schema = new mongoose.Schema({
        password:String,
        email:{type:String , unique:true},
        usertype:{type:String , required:true},
})

schema.plugin(uniqueValidator);
// create a model
const User = mongoose.model('User',schema)


  module.exports = User