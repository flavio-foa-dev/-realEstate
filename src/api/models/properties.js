'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Properties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Properties.hasMany(models.Images, {
        foreignKey: 'propertieId'
      });
      Properties.belongsTo(models.Users);
    }
  }
  Properties.init({
    ownerId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    status: DataTypes.STRING,
    buyerUser: DataTypes.NUMBER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Properties'
  });
  return Properties;
};
