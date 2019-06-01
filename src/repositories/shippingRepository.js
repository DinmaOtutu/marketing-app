/* eslint-disable import/no-cycle */
import sequelize from '../bin/www';

/**
 * @description Shipping repository class
 * @class ShippingRepository
 */
class ShippingRepository {
/**
     * @description Get all shipping regions
     * @param {null} - no parameter
     * @returns {Object}  result from query
     */
  static async GetShippingRegions() {
    try {
      const result = await sequelize.query('CALL customer_get_shipping_regions();', {
        type: sequelize.QueryTypes.SELECT
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Get shippings by region
     * @param {Number} shippingRegionId - shipping region id
     * @returns {Object}  result from query
     */
  static async GetShippingsByRegion(shippingRegionId) {
    try {
      const result = await sequelize.query('CALL orders_get_shipping_info(:shippingRegionId)', {
        replacements: {
          shippingRegionId
        },
        type: sequelize.QueryTypes.SELECT
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default ShippingRepository;
