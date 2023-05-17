const model = require('../models/product')
const Product = model.Product

const getAllProducts = async (req,res)=>{
    let data = await Product.find()
    res.send(data)
}
const getProduct = async (req,res)=>{
    let data = await Product.find({"_id":req.params.id})
    res.send(data)
}
const createProduct = async (req,res)=>{
    const product = new Product(req.body)
    let data = await product.save()
    res.send(data)
}
const replaceProduct =async (req,res)=>{
    let data = await Product.replaceOne({"id":req.params.id},{...req.body})
    res.send(data)
}
const updateProduct = async (req,res)=>{
    let data = await Product.updateOne({"_id":req.params.id},{$set:{"price":req.body.price}})
    res.send(data)
}
const deleteProduct =async (req,res)=>{
    let data = await Product.deleteOne({"_id":req.params.id})
    res.send(data)
}
const deleteProductByBody =async (req,res)=>{
    let data = await Product.deleteOne({"title":req.body.title})
    res.send(data)
}



module.exports = {getProduct,getAllProducts,createProduct,updateProduct,replaceProduct,deleteProduct,deleteProductByBody}
