const jwt = require("jsonwebtoken");
const { secret } = require("../../config");
const { User } = require("../db");

const verifyAdmin = async (req, res, next) => {
 try{ const token = req.headers["token"];
 
  if (!token) return res.status(428).send({ message: "No token provided" });
  const verify = jwt.verify(token, secret.SECRET);
  const user = await User.findOne({ where: { id: verify.id } });
 if(user.dataValues.rol !== 'Admin') return res.status(401).send({message:'Unauthorized request. Only admin can make this request'})
  next()
 } catch(e){
  return res.status(400).send({message: 'ERROR in verifyAdmin'})
 }
};
 
module.exports = { 
  verifyAdmin,
};
