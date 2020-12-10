'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Phone.init({
    model: {
      allowNull: false, 
      type: DataTypes.STRING(32),
      validate:{
        notNull:true,
        len: [1,32],
      }
    },
    brand:{ 
      type: DataTypes.STRING(32),
      validate:{
        len: [0,32],
      }
    },
    vendorDate: {
      type: DataTypes.DATE,
      validate:{
      notNull:true,
      }
    },
    ram: {
      allowNull: false, 
      type: DataTypes.STRING(10),
      validate:{
        isAlphanumeric: true,
        notNull:true,
        len: [4,10],
      }
    },
    cpu: {
      type: DataTypes.STRING(32),
      validate:{
        len: [0,32],
      }
    },
    screenSize: DataTypes.INTEGER,
    nfc: DataTypes.BOOLEAN
  }, {
    sequelize,
    underscored: true,
    modelName: 'Phone',
  });
  return Phone;
};
