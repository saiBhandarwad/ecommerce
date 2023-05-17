const mongoose = require('mongoose')
const {Schema} = mongoose
const porductSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    price:{
        type:Number,
        required:true,
        min:[0,"price should be >= 0"]
    },
    discountPercentage:{
        type:Number,
        min:[0,"discount should be >= 0"],
        max:[100,"discount should be <=100"]
    },
    brand:String,
    rating:{
        type:Number,
        min:[0,"rating should be >= 0"],
        max:[5,"rating should be <=5"],
        default:0
    },
    thumbnail:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    images:[String]
})
exports.Product = mongoose.model('Product',porductSchema)