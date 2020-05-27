const express = require('express');
const router = express.Router();
const { getStudents, insertStudent, getSingleStudent, deleteStudent, updateStudent } = require('../Controller/student')

router.get('/getAllStudents', getStudents);
router.post('/insertStudent', insertStudent);
router.post('/getStudent', getSingleStudent)
router.post('/deleteStudent', deleteStudent)
router.post('/updateStudent', updateStudent)
router.post('/payment', payment)