const {Content, Category} = require ('../db')

let categories=['Action', 'Adventure', 'Terror', 'Drama', 'Comedy', 'Romantic']


const createCategories = async () => {
categories.map((category) => Category.findOrCreate({
   where:{name:category}
}) ) 
}
 

const getCategories = async (req,res) => {
 
 let categories = await Category.findAll()
 categories = categories.map(cat =>{
    return {
        name: cat.name
    }
 })
 return res.status(200).send(categories)
}


module.exports = {
    createCategories,
    getCategories
}