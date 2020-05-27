const Joi = require('@hapi/joi');

/* 
    1. There is two data. Schema and OriginalData
*/
const ValidationResult = (schema, data) => {
    let schema_val = Joi.object().keys(schema)
    let result = Joi.validate(data, schema_val)
    if (result.error === null) {
        return true
    } else {
        return result.error
    }
}

module.exports = {
    ValidationResult
}