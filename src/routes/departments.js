/* eslint-disable import/no-cycle */
import { Router } from 'express';
import DepartmentsController from '../controllers/departmentsController';

const router = Router();

router.get('/departments', DepartmentsController.GetAllDepartments);
router.get('/departments/:departmentId', DepartmentsController.GetDepartmentById);

export default router;
