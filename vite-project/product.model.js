import mongoose from "mongoose";
const product_schema=new mongoose.Schema({
    productname:{type:String},
    categoryname:{type:String},
    description:{type:String},
    price:{type:String},
    stock:{
        
        size_S:{type:Number},
        size_M:{type:Number},
        size_L:{type:Number},
        size_XL:{type:Number},
    },
  
    banner:{type:String},
    images:{type:Object}
})

export default mongoose.model.products||mongoose.model("products",product_schema)