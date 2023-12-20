import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router.post('/create-students', StudentController.createStudent);
router.get('/', StudentController.getAllStudents);
router.get('/:id', StudentController.getOneStudents);

export const StudentRouter = router;
