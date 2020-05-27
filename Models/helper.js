const { students, employee } = require('./schema');
const GetStudent = (callback) => {
    console.log("helper")
    students.find({}, (err, result) => {
        if (err) {
            callback(err)
        } else {
            callback(null, result)
        }
    });
};

const createStudent = (data, callback) => {
    students.create(data, (err, result) => {
        if (err) {
            callback(err)
        } else {
            callback(null, result)
        }
    });
}

const getSingleStudentHelper = (data, callback) => {
    students.find(data, (err, result) => {
        if (err) {
            callback(err)
        } else {
            callback(null, result)
        }
    });
}

const deleteStudent = (data, callback) => {
    students.findOneAndDelete(data, (err, result) => {
        if (err) {
            callback(err)
        } else {
            callback(null, "Student deleted")
        }
    })
}

const updateStudent = (filter, updateData, callback) => {
    students.updateOne(filter, { $set: updateData }, (err, result) => {
        if (err) {
            callback(err)
        } else {
            callback(null, result)
        }
    });
}

module.exports = {
    GetStudent,
    createStudent,
    getSingleStudentHelper,
    deleteStudent,
    updateStudent
}