const userModel = require('../models/index.js');

class UserService {
  static async getUsers () {
    const users = await userModel.Users.findAll();
    return users;
  }

  static async getUser (id) {
    return userModel.Users.findOne({ where: { id } });
  }
}

module.exports = UserService;
