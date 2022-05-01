const DataController = require('../DAL/db')

async function getUser(req)  {
    const result = await DataController.getUser(req)
    return result;
};
const getScore = (req,res,next) => {
    res.json({score:100});
};

module.exports = {
    getUser,
    getScore
};
