const db = require('../models/index');

class UserService {
  static async getUsersDeleted () {
    const users = await db.Users.findAll({
      where: {
        active: false
      }
    });
    return users;
  }

  static async getUsers () {
    const users = await db.Users.findAll();
    return users;
  }

  static async getUser (id) {
    return db.Users.findOne(
      { where: { id, active: true } });
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
    const userCreated = await db.Users.create(parseUser);

    return userCreated;
  }

  static async updateUser (id, userUpdate) {
    const user = await db.Users.findOne({ where: { id } });
    if (!user) {
      return null;
    }
    return db.Users.update(userUpdate, { where: { id: Number(id) } });
  }

  static async deleteUser (id) {
    const user = await this.getUser(id);
    if (!user) {
      return null;
    }
    return db.Users.destroy(
      { where: { id: Number(id) } }
    );
  }
}

module.exports = UserService;
