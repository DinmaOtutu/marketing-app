// eslint-disable-next-line import/no-cycle
import AttributesService from '../services/attributesService';

/**
 * @description Attribute controller class
 * @class AttributeController
 */
class AttributeController {
  /**
     * @description get attribute list
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns list of attributes
     */
  static async GetAttributeList(req, res) {
    const response = await AttributesService.GetAttributeList();
    if (response.length > 0) {
      return res.status(200).json(response);
    }
    return res.status(500).json({
      message: 'Ooops Something went wrong, Please try again.',
    });
  }

  /**
     * @description register a customer
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns list of attributes
     */
  static async GetAttributesById(req, res) {
    const { attributeId } = req.params;
    // eslint-disable-next-line radix
    const response = await AttributesService.GetAttributesById(parseInt(attributeId));
    if (response.length > 0) {
      return res.status(200).json(response);
    }
    return res.status(404).json({
      error: 'Attribute resource not found'
    });
  }

  /**
     * @description register a customer
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns list of attributes
     */
  static async GetAttributesValueById(req, res) {
    const { attributeId } = req.params;
    // eslint-disable-next-line radix
    const response = await AttributesService.GetAttributesValueById(parseInt(attributeId));
    if (response.length > 0) {
      return res.status(200).json(response);
    }
    return res.status(404).json({
      error: 'Attribute Values resource not found'
    });
  }

  /**
     * @description register a customer
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns list of attributes
     */
  static async GetAttributesByProductId(req, res) {
    const { productId } = req.params;
    // eslint-disable-next-line radix
    const response = await AttributesService.GetAttributesByProductId(parseInt(productId));
    if (response.length > 0) {
      return res.status(200).json(response);
    }
    return res.status(404).json({
      error: 'Attribute Values resource not found'
    });
  }
}

export default AttributeController;
