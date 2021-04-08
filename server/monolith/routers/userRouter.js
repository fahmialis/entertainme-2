const express = require('express')
const router = express.Router()
const UserController = require('../controller/userController')

router.get('/', UserController.read)
router.get('/:id', UserController.findOne)

router.post('/', UserController.add)
router.patch('/:id', UserController.update)

router.delete('/:id', UserController.delete)


module.exports = router