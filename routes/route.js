const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();
const controller = require('../controllers/myController');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({extended:true}));
router.post('/user', (req,res) => {
    console.log(req.body);
});
router.get('/score',controller.getScore);

module.exports = router;