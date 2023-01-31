const UserService = require('../services/UsersService');
class UserController {
  static async getUsers (_req, res) {
    try {
      const users = await UserService.getUsers();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async getUser (req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getUser(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = UserController;
