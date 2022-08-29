const { text } = require('express');
var express = require('express');
var router = express.Router();
const { Sequelize, Model, DataTypes } = require("sequelize");
const userController = require('../controlar/usercontrolar.js');

router.get('/', userController.HomePage);

router.get('/listofusers', userController.ListofUsers);

router.get('/AddUsers', userController.AddUsers);
router.post('/add', userController.AddToDB)

router.get('/edit/:id',userController.Update)
router.post('/update/:id', userController.UpdateTable);

router.get('/delete/:id', userController.Delete);




module.exports = router;
