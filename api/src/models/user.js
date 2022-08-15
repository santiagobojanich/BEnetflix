const { DataTypes } = require('sequelize')


module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('User', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      }, 
      
     username: {
        type: DataTypes.TEXT,
        allowNull:false
      },
      
     password: {
        type: DataTypes.TEXT,
        allowNull: false
     },

     rol: {
        type:DataTypes.ENUM('User', 'Admin'),
        defaultValue: 'User',
        allowNull:false
     }
    
    }) 
       
   
}