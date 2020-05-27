const { ValidationResult } = require('../Controller/components');
const { studentSchemaVal } = require('../Models/student');
const helper = require('../Models/helper');
var request= require('request');

const getStudents = (req, res) => {
    console.log("i am a controller function")
    helper.GetStudent((err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    });
}

const insertStudent = (req, res) => {
    let serverside_val = ValidationResult(studentSchemaVal, req.body);
    if (serverside_val === true) {
        helper.createStudent(req.body, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.send(result)
            }
        })
    } else {
        res.send(serverside_val);
    }
}

const getSingleStudent = (req, res) => {
    helper.getSingleStudentHelper(req.body, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
}

const deleteStudent = (req, res) => {
    helper.deleteStudent(req.body, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
}

const updateStudent = (req, res) => {
    helper.updateStudent(req.body.filter, { $set: req.body.data }, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
}

const payment = (req, res) => {
    var headers = { 'X-Api-Key': 'd82016f839e13cd0a79afc0ef5b288b3', 'X-Auth-Token': '3827881f669c11e8dad8a023fd1108c2'}
    var payload = {
      purpose: 'FIFA 16',
      amount: '2500',
      phone: '9999999999',
      buyer_name: 'John Doe',   
      redirect_url: 'http://www.example.com/redirect/',
      send_email: true,
      webhook: 'http://www.example.com/webhook/',
      send_sms: true,
      email: 'foo@example.com',
      allow_repeated_payments: false}
    
    request.post('https://www.instamojo.com/api/1.1/payment-requests/', {form: payload,  headers: headers}, function(error, response, body){
      if(!error && response.statusCode == 201){
        res.send(err)
      }else{
          res.send(response)
      }
    })
}

module.exports = {
    getStudents,
    insertStudent,
    getSingleStudent,
    deleteStudent,
    updateStudent,
    payment
}