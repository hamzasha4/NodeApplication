const db = require('../DAL/db.js')
const getUser = (req,res,next) => {
res.json({name:"Hamza Tahir"});
};
const getScore = (req,res,next) => {
    res.json({score:100});
};

module.exports = {
    getUser,
    getScore
};
