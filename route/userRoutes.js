const express = require ('express')
const userRoter = express.Router()
const { signUp } = require('../controller/userController')

userRoter
    .route('/api/user/reg')
    .post(signUp)

module.exports = userRoter