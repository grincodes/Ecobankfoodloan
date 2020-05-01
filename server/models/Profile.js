const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//create  schema
const schema = new mongoose.Schema({
        firstname:String,
        lastname:String,
        dob:Date,
        address:String,
        bvn:String,
        gender:String,
        accountId:String,
        phonenumber:String,
        password:String,
        userId:String
})

schema.plugin(uniqueValidator);
// create a model
const Profile = mongoose.model('Profile',schema)


  module.exports = Profile