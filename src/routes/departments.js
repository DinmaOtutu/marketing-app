import { Router } from 'express';
// eslint-disable-next-line import/no-cycle
import DepartmentsController from '../controllers/departmentsController';

const router = Router();

router.get('/departments', DepartmentsController.GetAllDepartments);
router.get('/departments/:departmentId', DepartmentsController.GetDepartmentById);

export default router;
