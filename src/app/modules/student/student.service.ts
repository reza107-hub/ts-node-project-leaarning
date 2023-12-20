import mongoose from 'mongoose';
import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDb = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDb = async () => {
  const result = await StudentModel.find();
  return result;
};

const getOneStudentsFromDb = async (id: string) => {
  const result = await StudentModel.findOne({
    _id: new mongoose.Types.ObjectId(id),
  });
  return result;
};

export const StudentService = {
  createStudentIntoDb,
  getAllStudentsFromDb,
  getOneStudentsFromDb,
};
