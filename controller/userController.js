const userModel = require ('../model/model')
const { validateUserReg } = require('../validation')
const bcrypt = require('bcrypt')

const signUp = async (req, res) =>{
    try {
        
        const {error} = validateUserReg(req.body)
        if(error){
            res.status(409).json({
                message: error.message
            })
        }else{
            const exUser = await userModel.findOne({
                email: req.body.email
            })
            if(exUser){
                res.json({
                    message: `User alredy exist`
                })
            } else{
                const saltedPassword = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(req.body.password, saltedPassword)

                const userData = {
                    name: req.body.name,
                    username: req.body.username,
                    email: req.body.email,
                    password: hashedPassword
                }

                const user = await userModel.create(userData)
                if(!user){
                    res.status(400).json({
                        status: 400,
                        message: `failed to create new user`
                    })
                } else{
                    res.status(201).json({
                        status: 201,
                        data: user
                    })
                }
            }
        }

    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

module.exports ={
    signUp
}