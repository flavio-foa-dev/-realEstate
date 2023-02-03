const ImageService = require('../services/ImagesService');
class ImageController {
  static async getImages (_req, res) {
    try {
      const images = await ImageService.getImages();
      return res.status(200).json(images);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async createImage (req, res) {
    try {
      const image = await ImageService.createImage(req.body);
      return res.status(201).json({ message: 'created', image });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deleteImage (req, res) {
    try {
      const { id } = req.params;

      const image = await ImageService.deleteImage(id);
      if (!image) {
        return res.status(404).json({ message: 'Image not found' });
      }
      return res.status(200).json({ message: 'Image deleted' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = ImageController;
