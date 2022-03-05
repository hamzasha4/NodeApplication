const express = require("express");
const router = express.Router();
const controller = require('../controllers/myController');

router.get('/user',controller.getUser);
router.get('/score',controller.getScore);

module.exports = router;