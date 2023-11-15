const { Router } = require('express')
const router = Router()
const { 
    getPostersPage, 
    addNewPosterPage, 
    addNewPoster,
    getAllPostersPage,
    getAllPostersData,
    getOnePoster
} = require('../controllers/posterControllers')

router.get('/', getPostersPage)
router.get('/add', addNewPosterPage)
router.post('/add', addNewPoster)
router.get('/all', getAllPostersPage)
router.get('/all-posters', getAllPostersData)
router.get('/:id', getOnePoster)

module.exports = router