const Joi = require('@hapi/joi');

let studentSchemaVal = {
    student_name: Joi.string().required().min(3)
        .max(30),
    student_age: Joi.number(),
}

module.exports={
    studentSchemaVal
}