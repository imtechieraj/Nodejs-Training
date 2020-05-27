const express = require('express')
const app = express();
require('./Config/database');

const { PORT, JWTKey } = require('./Config/config')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { userMiddleware } = require('./middleware');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/student", require('./Routes/studentRoutes'));

/* Serverside Validation schema Start*/

/* Register API Start*/
/* Register Process :

1. EmailID existing or not
2. not -> Register 
3. there-> Already Registered 

Login Process:
1. Email ID is there or not ?
2. There -> current password (Login) === hash password verify - > not -> your emailId is wrong
3. True -> Token Generation False-> Password is wrong */

app.post('/Register', (req, res) => {
    employee.find({ employee_email: req.body.employee_email }, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            if (result.length === 0) {
                var hash = bcrypt.hashSync(req.body.password, 10);
                req.body.password = hash;
                employee.create(req.body, (err, result) => {
                    if (err) {
                        res.send(err)
                    } else {
                        res.send(result);
                    }
                });
            } else {
                res.send("Already Registered")
            }
        }
    });
});
/* Register API End*/
/* Login API Start*/
app.post('/Login', (req, res) => {
    employee.find({ employee_email: req.body.employee_email }, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            if (result.length === 0) {
                res.send("please register")
            } else {
                if (bcrypt.compareSync(req.body.password, result[0].password)) {
                    let obj = {
                        email: result[0].employee_email,
                        id: result[0]._id
                    }
                    jwt.sign(obj, JWTKey, { expiresIn: 36000 }, (err, token) => {
                        if (err) {
                            res.send(err)
                        } else {
                            req.body.token = token
                            res.send(req.body)
                        }
                    });
                } else {
                    res.send("your password is wrong")
                }
            }
        }
    })
});
/* Login API End*/

app.post('/tokenVerify', userMiddleware, (req, res) => {
    res.send("Token verif")
})

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))