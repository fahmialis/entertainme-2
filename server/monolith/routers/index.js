const express = require('express')
const router = express.Router()
const UserRouter = require('./userRouter')


router.get('/', (req, res) => {
  res.status(200).json({ message : 'test mongodb'})
})

router.use('/user', UserRouter)

module.exports = router