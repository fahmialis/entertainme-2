const express = require('express')
const router = express.Router()
const MoviesRouter = require('./moviesRouter')


router.get('/', (req, res) => {
  res.status(200).json({ message : 'test movies mongodb'})
})

router.use('/movies', MoviesRouter)

module.exports = router