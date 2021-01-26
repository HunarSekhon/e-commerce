const asyncHandler = require ('express-async-handler')
var Product = require('../models/productModel')

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

const getProductByID = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }
    else{
        res.status(404)
        throw new Error('Product not found')
    }

    res.json(product)
})

module.exports = getProducts, getProductByID
