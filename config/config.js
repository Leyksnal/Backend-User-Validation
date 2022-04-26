const mongoose = require('mongoose')
const url = "mongodb://localhost/news"

mongoose.connect(url).then((req, res)=>{
    console.log(`Connected to the DB`)
}).catch((error) =>{
    console.log(`Not Connected`)
})