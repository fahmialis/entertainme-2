const express = require('express')
const router = express.Router()
const MoviesRouter = require('./moviesRouter')
const SeriesRouter = require('./seriesRouter')

router.get('/', (req, res) => {
  res.status(200).json({ message : 'test orchestrator'})
})

router.use('/movies', MoviesRouter)
router.use('/series', SeriesRouter)

module.exports = router