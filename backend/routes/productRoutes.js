const express = require('express')
const router = express.Router()
const getProducts = require('../controllers/productController')
const getProductByID = require('../controllers/productController')
router.route('/').get(getProducts)

router.route('/:id').get(getProductByID)


module.exports = router


