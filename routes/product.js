const express = require('express')
const productRouter = express.Router()
const productController = require ('../controller/product')
const {getProduct,getAllProducts,createProduct,updateProduct,replaceProduct,deleteProduct,deleteProductByBody}=productController

productRouter
.get('/products',getAllProducts)
.get('/products/:id',getProduct)
.post('/products',createProduct)
.put('/products/:id',replaceProduct)
.patch('/products/:id',updateProduct)
.delete('/products/:id',deleteProduct)
.delete('/products/',deleteProductByBody)

module.exports = productRouter