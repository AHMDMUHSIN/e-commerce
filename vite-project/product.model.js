import mongoose from "mongoose";
const product_schema=new mongoose.Schema({
    productname:{type:String},
    categoryname:{type:String},
    description:{type:String},
    price:{type:String},
    stock:{
        
        size_S:{type:String},
        size_M:{type:String},
        size_L:{type:String},
        size_XL:{type:String},
    },
  
    banner:{type:String},
    images:{type:Object}
})

export default mongoose.model.products||mongoose.model("products",product_schema)