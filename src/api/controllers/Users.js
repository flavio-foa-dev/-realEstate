const db = require('../models/index.js');

class UserController {
  static async getUsers (req, res) {
    try {
      const users = await db.Users.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = UserController;
