const { newsModel } = require('../model/model')
const { validateNews } = require('../validation')

// Add to the document
const postNews = async (req, res)=>{
    try {

        const {error} = validateNews(req.body)
        if(error){
            res.status(409).json({
                status: `failed`,
                message: error.details[0].message
            })
        }
        const data = {
            title,
            description
        }
        const news = await newsModel.create(data)
        res.status(201).json({
            status: `Created Successfully`,
            data : {
                news
            }
        })  
    } catch (error) {
        res.status(409).json({
            status: `Failed to create`,
            message: error.message
        })
    }
}

// One document
const oneNews = async (req, res)=>{
    try {
        const id = req.params.id
        const news = await newsModel.findById(id)
        res.status(200).json({
            status: `One News`,
            data : {
                news
            }
        })  
    } catch (error) {
        res.status(400).json({
            status: `Failed to GET one new`,
            message: error.message
        })
    }
}

// Get all
const allNews = async (req, res)=>{
    try {
        const news = await newsModel.find()
        res.status(200).json({
            status: `All News`,
            data : {
                news
            }
        })  
    } catch (error) {
        res.status(400).json({
            status: `Failed to GET all new`,
            message: error.message
        })
    }
}

// Update
const updateNews = async (req, res)=>{
    try {

        const {error} = validateNews(req.body)
        if(error){
            res.status(409).json({
                status: `failed`,
                message: error.details[0].message
            })
        }
        const data = {
            title,
            description
        }
        const news = await newsModel.findByIdAndUpdate(req.params.id, data, {new: true})
        res.status(200).json({
            status: `Updated Successfully`,
            data : {
                news
            }
        })  
    } catch (error) {
        res.status(400).json({
            status: `Failed to update`,
            message: error.message
        })
    }
}

// Delete
const deleteNews = async (req, res)=>{
    try {

        const news = await newsModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: `Deleted Successfully`,
        })  
    } catch (error) {
        res.status(400).json({
            status: `Failed to delete`,
            message: error.message
        })
    }
}

module.exports ={
    postNews,
    oneNews,
    allNews,
    updateNews,
    deleteNews
}