const PropertieService = require('../services/PropertiesService');

class PropertieController {
  // static async getPropertieDeleted (_req, res) {
  //   try {
  //     const users = await PropertieService.getUsersDeleted();
  //     return res.status(200).json(users);
  //   } catch (error) {
  //     return res.status(500).json({ message: error.message });
  //   }
  // }

  static async getProperties (_req, res) {
    try {
      const users = await PropertieService.getProperties();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async getPropertieUser (req, res) {
    try {
      const { userId } = req.params;
      const propertie = await PropertieService.getPropertieUser(userId);
      if (!propertie.length) {
        return res.status(404).json({ message: 'Propertie not found' });
      }
      return res.status(200).json(propertie);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async getPropertie (req, res) {
    try {
      const { id } = req.params;
      const propertie = await PropertieService.getPropertie(id);
      if (!propertie) {
        return res.status(404).json({ message: 'propertie not found' });
      }
      return res.status(200).json(propertie);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async createPropertie (req, res) {
    try {
      const propertie = await PropertieService.createPropertie(req.body);
      console.log(propertie);
      return res.status(201).json({ message: 'created', propertie });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async updatePropertie (req, res) {
    try {
      const { id } = req.params;
      const propertie = req.body;
      const user = await PropertieService.updatePropertie(id, propertie);
      if (!user) {
        return res.status(404).json({ message: 'Propertie not found' });
      }
      return res.status(201).json({ message: 'Propertie updated with sucess' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deletePropertie (req, res) {
    try {
      const { id } = req.params;

      const user = await PropertieService.deletePropertie(id);
      if (!user) {
        return res.status(404).json({ message: 'Propertie not found' });
      }
      return res.status(200).json({ message: 'Propertie deleted with sucess' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = PropertieController;
