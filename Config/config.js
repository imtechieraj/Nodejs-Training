const env = require('node-env-file');
env(__dirname + '/.env')
const env_var = process.env;

module.exports = {
    PORT:env_var.PORT,
    DBConnect:env_var.DBConnect,
    JWTKey:env_var.JWTKey
}
