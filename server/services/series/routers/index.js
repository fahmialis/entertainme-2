const express = require('express')
const router = express.Router()
const SeriesRouter = require('./seriesRouter')


router.get('/', (req, res) => {
  res.status(200).json({ message : 'test series mongodb'})
})

router.use('/series', SeriesRouter)

module.exports = router