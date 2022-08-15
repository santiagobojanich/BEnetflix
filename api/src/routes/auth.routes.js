const {Router} = require ('express')
const router = Router()

const {signUp, signIn} = require ('../controllers/authController')


router.post('/signup', signUp)
router.post('/signIn', signIn)


module.exports = router