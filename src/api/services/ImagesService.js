const imageModel = require('../models/index');

class ImageService {
  static async getImages () {
    const users = await imageModel.Images.findAll();
    return users;
  }

  static async createImage (image) {
    const { url, propertieId } = image;
    const parseImage = {
      url,
      propertieId

    };
    return imageModel.Images.create(parseImage);
  }

  static async deleteImage (id) {
    const image = await imageModel.Images.findByPk(id);
    if (!image) {
      return null;
    }
    return imageModel.Images.destroy({
      where: {
        id
      }
    });
  }
}

module.exports = ImageService;
