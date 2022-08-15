const { Router } = require('express')
const router = Router()
const authR = require ('./auth.routes')
const content = require ('./content')
const categories = require('./categories')


router.use('/auth', authR)
router.use('/content', content)
router.use('/categories', categories)

module.exports = router