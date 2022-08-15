const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Content', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      }, 
      
      name: {
        type: DataTypes.TEXT,
        allowNull:false
      },
     
     image: {
        type: DataTypes.TEXT,
        allowNull: false
     },
 
     trailer: {
        type: DataTypes.TEXT
     },
     description:{ 
      type: DataTypes.TEXT
     },
     coments: { 
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    }
    }) 
}