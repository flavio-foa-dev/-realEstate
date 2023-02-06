const { sequelize } = require('../models/index');
const userModel = require('../models/index');
const propertieModel = require('../models/index');

class UserService {
  static async getUsersDeleted () {
    const users = await userModel.Users.findAll({
      where: {
        active: false
      }
    });
    return users;
  }

  static async getUsers () {
    const users = await userModel.Users.findAll();
    return users;
  }

  static async getUser (id) {
    return userModel.Users.findOne({ where: { id } });
  }

  static async createUser (user) {
    const { name, email, password, telephone, cpf } = user;
    const parseUser = {
      name,
      email,
      password,
      telephone,
      cpf,
      role: 'user',
      active: true

    };
    const userCreated = await userModel.Users.create(parseUser);

    return userCreated;
  }

  static async updateUser (id, userUpdate) {
    const user = await userModel.Users.findOne({ where: { id } });
    if (!user) {
      return null;
    }
    return userModel.Users.update(userUpdate, { where: { id: Number(id) } });
  }

  static async deleteUser (id) {
    const user = await this.getUser(id);
    if (!user) {
      return null;
    }
    return this.transaction(id);
  }

  static async transaction (id) {
    const user = await sequelize.transaction(async (t) => {
      await userModel.Users.update(
        { active: false },
        { where: { id: Number(id) } },
        { transaction: t }
      );
      await propertieModel.Properties.update(
        { active: false },
        { where: { ownerId: Number(id) } },
        { transaction: t }
      );
    });
    console.log(user, 'commit 2');
    return ['deletedTeste'];
  }
}

module.exports = UserService;
