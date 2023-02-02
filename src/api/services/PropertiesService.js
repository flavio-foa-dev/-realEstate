const propertieModel = require('../models/index');

class PropertieService {
  // static async getUsersDeleted () {
  //   const users = await propertieModel.Properties.findAll({
  //     where: {
  //       active: false
  //     }
  //   });
  //   return users;
  // }

  static async getProperties () {
    return propertieModel.Properties.findAll();
  }

  static async getPropertie (id) {
    return propertieModel.Properties.findOne({ where: { id } });
  }

  static async getPropertieUser (userId) {
    return propertieModel.Properties.findAll({ where: { ownerId: Number(userId) } });
  }

  static async createPropertie (user) {
    const { ownerId, type, state, city, district, price, status } = user;
    const parsePropertie = {
      ownerId,
      type,
      state,
      city,
      district,
      price,
      status,
      buyerUser: null,
      createdAt: new Date(),
      updatedAt: new Date()
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
    return propertieModel.Properties.update({ active: false }, { where: { id: Number(id) } });
  }
}

module.exports = PropertieService;
