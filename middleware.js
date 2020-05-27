const jwt = require('jsonwebtoken')
const { students, employee } = require('./Models/schema')

/* Middleware Process:
1. Get the token from header section 
2. Token verify
3. Verify - > success -> next function
          - > Failed  -> error response
 */
const userMiddleware = (req, res, next) => {
    let token = req.headers.token;
    jwt.verify(token, "test", (err, OriginalData) => {
        if (err) {
            res.send("invalid user")
        } else {
            employee.find({ _id: OriginalData.id },(err,result)=>{
                if(err){
                    res.send("invalid user")
                }else{
                    next()
                }
            })
        }
    })
}

module.exports = {
    userMiddleware
}