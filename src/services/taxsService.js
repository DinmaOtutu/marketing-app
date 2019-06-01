// eslint-disable-next-line import/no-cycle
import TaxsRepository from '../repositories/taxsRepository';

/**
 * @description Tax service class
 * @class TaxsService
 */
class TaxsService {
  /**
     * @description get all taxs
     * @returns {Object} returns all tax object
     */
  static async GetAllTax() {
    const response = await TaxsRepository.GetAllTax();
    return response;
  }

  /**
     * @description task by Id
     * @param {NUMBER} taxId - Http Request object
     * @returns {Object} returns all tax object
     */
  static async GetTaxById(taxId) {
    const response = await TaxsRepository.GetTaxById(taxId);
    return response;
  }
}

export default TaxsService;
