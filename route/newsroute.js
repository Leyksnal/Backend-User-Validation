const express = require('express')
const router = express.Router()
const { postNews, allNews, updateNews, deleteNews } = require('../controller/newsController')

router
    .route('/api/news')
    .post(postNews)
    .get(allNews)


router
    .route('/api/news?:id')
    .patch(updateNews)
    .delete(deleteNews)


module.exports = router    