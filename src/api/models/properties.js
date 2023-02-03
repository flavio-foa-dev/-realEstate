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
      Properties.belongsTo(models.Users, {
        as: 'users',
        foreignKey: 'id'
      });
    }
  }
  Properties.init({
    ownerId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    type: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    status: DataTypes.STRING,
    buyerUser: DataTypes.NUMBER,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Properties'

  });
  return Properties;
};
