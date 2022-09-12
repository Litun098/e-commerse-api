const express = require('express');
const {listCategories} = require('../../../src/controllers/categoryController')
const productController = require('../../../src/controllers/productControllers')
const userController = require('../../../src/controllers/userController')

let router = express.Router();

router.get("/category/all",listCategories);
router.get('/product/all',productController.listProducts)
router.post('/product/add',productController.addProduct)
router.post('/user/signup',userController.signup)
router.post('/user/login',userController.login)
module.exports = router