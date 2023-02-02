const imageModel = require('../models/index');

class ImageService {
  // static async getUsersDeleted () {
  //   const users = await userModel.Users.findAll({
  //     where: {
  //       active: false
  //     }
  //   });
  //   return users;
  // }

  static async getImages () {
    const users = await imageModel.Images.findAll();
    return users;
  }

  // static async getUser (id) {
  //   return userModel.Users.findOne({ where: { id } });
  // }

  // static async createUser (user) {
  //   const { name, email, password, telephone, cpf } = user;
  //   const parseUser = {
  //     name,
  //     email,
  //     password,
  //     telephone,
  //     cpf,
  //     role: 'user',
  //     active: true,
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   };
  //   const userCreated = await userModel.Users.create(parseUser);

  //   return userCreated;
  // }

  // static async updateUser (id, userUpdate) {
  //   const user = await userModel.Users.findOne({ where: { id } });
  //   if (!user) {
  //     return null;
  //   }
  //   return userModel.Users.update(userUpdate, { where: { id: Number(id) } });
  // }

  // static async deleteUser (id) {
  //   const user = await userModel.Users.findOne({ where: { id, active: true } });
  //   if (!user) {
  //     return null;
  //   }
  //   return userModel.Users.update({ active: false }, { where: { id: Number(id) } });
  // }
}

module.exports = ImageService;
