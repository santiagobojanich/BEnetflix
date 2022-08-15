const server = require('./src/app.js')
const { conn } = require('./src/db.js')
const {createAdmin} = require('./src/controllers/authController')
const {createCategories} = require('./src/controllers/categories')
const { demoContent } = require('./src/controllers/content.js')

conn
  .sync({ force: true })
  .then(() => {
    createCategories()
    console.log('categories added')
  createAdmin().then( () => demoContent() ) 
    console.log('admin created') 
  })
  .then(() => { 
    server.listen(process.env.DB_PORT, () => {
      console.log(`%s listening at ${process.env.DB_PORT}`) // eslint-disable-line no-console
    })
  }) 
  .catch((err) => console.log(err)) 

   
  
  module.exports = { server }
