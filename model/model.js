const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newsSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

const newsModel = mongoose.model('news', newsSchema)

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

const userModel = mongoose.model('user', userSchema)

module.exports = {
    newsModel,
    userModel
}
