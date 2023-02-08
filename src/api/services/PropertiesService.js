const propertieModel = require('../models/index');

class PropertieService {
  static async getUsersDeleted () {
    const propertiesDeleted = await propertieModel.Properties.findAll({
      where: {
        active: false
      }
    });
    return propertiesDeleted;
  }

  static async getProperties () {
    return propertieModel.Properties.findAll({ where: { active: true } });
  }

  static async getPropertie (id) {
    return propertieModel.Properties.findOne({ where: { id } });
  }

  static async getPropertieUser (userId) {
    return propertieModel.Properties.findAll({ where: { ownerId: Number(userId) } });
  }

  static async createPropertie (user) {
    const { ownerId, type, state, city, district, price, description, status } = user;
    const parsePropertie = {
      ownerId,
      active: true,
      type,
      code: Math.ceil(Math.random() * 10000),
      state,
      city,
      district,
      price,
      status,
      description,
      buyerUser: null
    };
    const userCreated = await propertieModel.Properties.create(parsePropertie);

    return userCreated;
  }

  static async updatePropertie (id, userUpdate) {
    const propertie = await propertieModel.Properties.findOne({ where: { id } });
    if (!propertie) {
      return null;
    }
    return propertieModel.Properties.update(userUpdate, { where: { id: Number(id) } });
  }

  static async deletePropertie (id) {
    const user = await propertieModel.Properties.findOne({ where: { id, active: true } });
    if (!user) {
      return null;
    }
    return propertieModel.Properties.destroy(
      { where: { id: Number(id) } });
  }
}

module.exports = PropertieService;
