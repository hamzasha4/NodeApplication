const sql = require('mssql')
const connectionString = require('../package.json').connectionString;
async function getUser(req) {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(connectionString)
        const result = await sql.query`select * from Users where UserName = ${req.body.UserName} and Password = ${req.body.Password}`
         return result
    } catch (err) {
        console.log(err);
    }
}
module.exports = {
    getUser
}