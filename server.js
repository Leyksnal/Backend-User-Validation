require('./config/config')
const express = require('express')
port = 1111
const newsRoutes = require('./route/newsroute')
const userRoutes = require('./route/userRoutes')

const app = express()
app.use(express.json())
app.use('/', newsRoutes)
app.use('/', userRoutes)

app.get('/', (req, res) =>{
    res.status(200).json({
        status: 200,
        message: `Running on ${port}`
    })
})




app.listen(port, ()=>{
    console.log(`Server running on ${port}`)
})