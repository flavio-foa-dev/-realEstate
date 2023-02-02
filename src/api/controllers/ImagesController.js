const ImageService = require('../services/ImagesService');
class ImageController {
  // static async getUsersDeleted (_req, res) {
  //   try {
  //     const users = await UserService.getUsersDeleted();
  //     return res.status(200).json(users);
  //   } catch (error) {
  //     return res.status(500).json({ message: error.message });
  //   }
  // }

  static async getImages (_req, res) {
    try {
      const images = await ImageService.getImages();
      return res.status(200).json(images);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // static async getUser (req, res) {
  //   try {
  //     const { id } = req.params;
  //     const user = await UserService.getUser(id);
  //     if (!user) {
  //       return res.status(404).json({ message: 'User not found' });
  //     }
  //     return res.status(200).json(user);
  //   } catch (error) {
  //     return res.status(500).json({ message: error.message });
  //   }
  // }

  // static async createUser (req, res) {
  //   try {
  //     const user = await UserService.createUser(req.body);
  //     return res.status(201).json({ message: 'created', user });
  //   } catch (error) {
  //     return res.status(500).json({ message: error.message });
  //   }
  // }

  // static async updateUser (req, res) {
  //   try {
  //     const { id } = req.params;
  //     const userUpdate = req.body;
  //     const user = await UserService.updateUser(id, userUpdate);
  //     if (!user) {
  //       return res.status(404).json({ message: 'User not found' });
  //     }
  //     return res.status(201).json({ message: 'User updated' });
  //   } catch (error) {
  //     return res.status(500).json({ message: error.message });
  //   }
  // }

  // static async deleteUser (req, res) {
  //   try {
  //     const { id } = req.params;

  //     const user = await UserService.deleteUser(id);
  //     if (!user) {
  //       return res.status(404).json({ message: 'User not found' });
  //     }
  //     return res.status(200).json({ message: 'User deleted' });
  //   } catch (error) {
  //     return res.status(500).json({ message: error.message });
  //   }
  // }
}

module.exports = ImageController;
