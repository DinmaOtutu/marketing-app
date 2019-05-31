// eslint-disable-next-line import/no-cycle
import DepartmentsRepository from '../repositories/departmentsRepository';

/**
 * @description Department service class
 * @class DepartmentsService
 */
class DepartmentsService {
  /**
     * @description get all the departments list
     * @returns {Object} returns department list
     */
  static async GetAllDepartments() {
    const response = await DepartmentsRepository.GetAllDepartments();
    return response;
  }

  /**
     * @description get all the departments list
     * @param {NUMBER} departmentId - attribute ID
     * @returns {Object} returns department list
     */
  static async GetDepartmentById(departmentId) {
    const response = await DepartmentsRepository.GetDepartmentById(departmentId);
    return response;
  }
}

export default DepartmentsService;
