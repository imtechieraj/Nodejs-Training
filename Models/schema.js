const mongoose = require('mongoose');

const students = new mongoose.Schema({
    student_name: { type: String },
    student_age: { type: Number }
});

const employee = new mongoose.Schema({
    employee_name: { type: String, required: true },
    employee_age: { type: Number },
    employee_email: { type: String, required: true },
    password: { type: String, required: true }
});

// module.exports = {
//     students: mongoose.model('students', students),
//     employee:mongoose.model('employees',employee),
// }

// module.exports.students = mongoose.model('students', students);
// module.exports.employee = mongoose.model('employees', employee);
module.exports = {
    students: mongoose.model('students', students)
}