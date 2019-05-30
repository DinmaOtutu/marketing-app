// eslint-disable-next-line import/no-cycle
import AttributesRepository from '../repositories/attributesRepository';

/**
 * @description Attribute service class
 * @class AttributeService
 */
class AttributesService {
  /**
     * @description get attribute list
     * @returns {Object} returns attributes list
     */
  static async GetAttributeList() {
    const getAttributeList = await AttributesRepository.GetAttributeList();
    return getAttributeList;
  }

  /**
     * @description get attribute by ID
     * @param {NUMBER} attributeId - attribute ID
     * @returns {Object} returns a single attribute via attribute Id
     */
  static async GetAttributesById(attributeId) {
    const response = await AttributesRepository.GetAttributesById(attributeId);
    return response;
  }

  /**
     * @description get attribute value by ID
     * @param {NUMBER} attributeId - attribute ID
     * @returns {Object} returns a single attribute value via attribute Id
     */
  static async GetAttributesValueById(attributeId) {
    const response = await AttributesRepository.GetAttributesValueById(attributeId);
    return response;
  }

  /**
     * @description get attribute value by ID
     * @param {NUMBER} productId - attribute ID
     * @returns {Object} returns a single attribute value via attribute Id
     */
  static async GetAttributesByProductId(productId) {
    const response = await AttributesRepository.GetAttributesByProductId(productId);
    return response;
  }
}

export default AttributesService;
