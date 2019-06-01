/* eslint-disable import/no-cycle */
import ShippingRepository from '../repositories/shippingRepository';

/**
 * @description Shipping service class
 * @class ShippingService
 */
class ShippingService {
  /**
     * @description Get all shipping regions
     * @param {null} cart - no parameter
     * @returns {Object} returns all shipping regions
     */
  static async GetShippingRegions() {
    const result = await ShippingRepository.GetShippingRegions();
    const regions = Object.values(result[0]);
    return regions;
  }

  /**
     * @description Get shippings by region
     * @param {Number} shippingRegionId - shipping region id
     * @returns {Object}  result shippins in a region
     */
  static async GetShippingsByRegion(shippingRegionId) {
    const result = await ShippingRepository.GetShippingsByRegion(shippingRegionId);
    const shippings = Object.values(result[0]);
    return shippings;
  }
}

export default ShippingService;
