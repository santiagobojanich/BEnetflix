const Router = require('express')
const router = Router()
const {createContent,getContent, getDetail, deleteContent, updateContent, makeComent} = require ('../controllers/content')
const {verifyToken} = require('../middlewares/verifyToken')
const { verifyAdmin } = require('../middlewares/verifyAdmin')

router.post('/', verifyAdmin, createContent)
router.post('/coment', makeComent)
router.get('/', verifyToken,getContent)
router.delete('/:id', verifyAdmin, deleteContent)
router.get('/:id', verifyToken,getDetail)
router.put('/:id', verifyAdmin, updateContent)

module.exports = router