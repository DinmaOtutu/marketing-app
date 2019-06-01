/* eslint-disable import/no-cycle */
import ShippingService from '../services/shippingService';

/**
 * @description Shipping controller class
 * @class ShippingController
 */
class ShippingController {
/**
   * @description Get all shipping regions
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} returns all shipping regions
   */
  static async GetShippingRegions(req, res) {
    try {
      const regions = await ShippingService.GetShippingRegions();
      return res.status(200).json(regions);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'Ooops something went wrong'
      });
    }
  }

  /**
   * @description Get shippings by region
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} result shippins in a region
   */
  static async GetShippingsByRegion(req, res) {
    try {
      const shippingRegionId = req.params.shipping_region_id;
      const shippings = await ShippingService.GetShippingsByRegion(shippingRegionId);
      return res.status(200).json(shippings);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'Ooops something went wrong'
      });
    }
  }
}

export default ShippingController;
