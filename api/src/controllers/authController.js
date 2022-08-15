const { User } = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const {secret} = require('../../config.js');
const { use } = require("../routes");



const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const comparePassword = async (password, recivedPassword) => {
  return await bcrypt.compare(password, recivedPassword);
};

const signUp = async (req, res) => {
  const { username, password } = req.body;

  let encryptedPassword = await hashPassword(password);

  let userVerify = await User.findOne({ where: { username: username } });
  if (userVerify) {
    return res.status(401).send({message:"Username already in use"});
  } else {
    
    let userCreate = await User.create({
      username: username,
      password: encryptedPassword,
    });
   
  const token =  jwt.sign({id: userCreate.dataValues.id}, secret.SECRET,{
        expiresIn:43200 //12 horas
    })
 
    return res.status(200).send({token});
  }
};

const signIn = async (req, res) => {
   const {username, password} = req.body
    
    const user = await User.findOne({where:{username:username}})
    
    if(!user) return res.status(400).send({message: 'User not Found'})
    
  const matchPassword = await comparePassword(password, user.dataValues.password)
         
  if(!matchPassword) return res.status(401).send({token:null, message: 'Invalid password'})
  
  let token =  jwt.sign({id: user.dataValues.id, username: user.dataValues.username, rol: user.dataValues.rol}, secret.SECRET, {
    expiresIn:43200 
  })

    return res.status(200).send({token, username:user.username, rol:user.rol});
};

const createAdmin = async (req,res) => {
 
   let admin = await User.findOne({where:{username:'admin'}})
   if(!admin){ 
    await User.create({username:'admin', password: await hashPassword('admin'), rol:'Admin'})
   }
   
   let user = await User.findOne({where:{username:'BEuser'}})
   if(!user){
    await User.create({username:"BEuser", password: await hashPassword("1234")})
   }
  }

module.exports = {
  signIn, 
  signUp,
  createAdmin
};
