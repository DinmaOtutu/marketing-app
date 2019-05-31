// eslint-disable-next-line import/no-cycle
import DepartmentsService from '../services/departmentsService';

/**
 * @description Department controller class
 * @class DepartmentsController
 */
class DepartmentsController {
  /**
     * @description get department list
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns list of departments
     */
  static async GetAllDepartments(req, res) {
    const response = await DepartmentsService.GetAllDepartments();
    if (response.length !== 0) {
      return res.status(200).json(response);
    }
  }

  /**
     * @description get department list
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns list of departments
     */
  static async GetDepartmentById(req, res) {
    const { departmentId } = req.params;
    // eslint-disable-next-line radix
    const response = await DepartmentsService.GetDepartmentById(parseInt(departmentId));
    if (response.length !== 0) {
      return res.status(200).json({ department_id: departmentId, ...response });
    }
    return res.status(404).json({
      error: 'Department not found.'
    });
  }
}

export default DepartmentsController;
