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
    return db.Users.findOne({ where: { id } });
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
    return this.trans(id);
  }

  static async trans (id) {
    try {
      db.sequelize.transaction(async (t) => {
        await db.Users.update(
          { active: false },
          { where: { id: Number(id) } },
          { transaction: t }
        );
        await db.Properties.update(
          { active: false },
          { where: { ownerId: Number(x) } },
          { transaction: t }
        );
      });

      return ['deletedTeste'];
    } catch (e) {
      throw new Error('Erro', e.message);
    }
  }
}

module.exports = UserService;
