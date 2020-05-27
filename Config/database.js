const { DBConnect } = require('./config')
const db = require('mongoose')
const DatabaseConn = db.connect(DBConnect, { useNewUrlParser: true })
DatabaseConn.then(() => {
    console.log("Database Connected")
}).catch((err) => {
    console.log("Database not Connected")
    console.log(err)
});