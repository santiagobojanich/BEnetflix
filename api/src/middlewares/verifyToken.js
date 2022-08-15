const jwt = require('jsonwebtoken')
const{secret} = require('../../config')

const {User} = require ('../db')


const verifyToken = async (req,res,next) => {
try {const token = req.headers["token"]
 
 if(!token) return res.status(428).send({message: "No token provided"})
 
 const verify = jwt.verify(token,secret.SECRET)


 const user = await User.findOne({where:{id:verify.id}})
 if(!user)  return res.status(404).send({message: 'User not found'})

next()
}
catch(e){
   return res.status(401).send({message: 'Something went wrong with token'})
}
} 


module.exports= {
    verifyToken
}