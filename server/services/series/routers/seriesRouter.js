const express = require('express')
const router = express.Router()
const SeriesController = require('../controllers/seriesController')

router.get('/', SeriesController.read)
router.get('/:id', SeriesController.findOne)

router.post('/', SeriesController.add)
router.patch('/:id', SeriesController.update)

router.delete('/:id', SeriesController.delete)


module.exports = router