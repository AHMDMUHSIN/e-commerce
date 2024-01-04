import mongoose from "mongoose";
const cart_schema=new mongoose.Schema({
    cust_id:{type:String},
    prod_id:{type:String},
    productname:{type:String},
    categoryname:{type:String},
    price:{type:String},
    size:{type:String},
    quantity:{type:Number},
    banner:{type:String}
})

export default mongoose.model.productcart||mongoose.model("productcart",cart_schema)