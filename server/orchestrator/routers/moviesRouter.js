const express = require('express')
const router = express.Router()

const MoviesController = require('../controllers/moviesController')

router.get('/', MoviesController.read)
router.get('/:id', MoviesController.findOne)

router.post('/', MoviesController.add)
router.patch('/:id', MoviesController.update)

router.delete('/:id', MoviesController.delete)


module.exports = router