const joi = require('@hapi/joi')

const validateNews = (data) =>{
    const val = joi.object({
        title: joi.string(),
        description: joi.string()
    })

    return val.validate(data)
}

module.exports.validateNews = validateNews


const validateUserReg = (data) =>{
    const vali = joi.object({
        name: joi.string(),
        username: joi.string(),
        password: joi.string().min(6).max(10),
        email: joi.string().email()
    })

    return vali.validate(data)
}

module.exports.validateUserReg = validateUserReg