const { Router } = require('express')
const { createUser, loginUser } = require('../controllers/users_controller')

const router = Router()

router.post('/signup', createUser)
router.post('/login', loginUser)

module.exports = router