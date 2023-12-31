import mongoose from "mongoose";
const wishlist_schema=new mongoose.Schema({
    cust_id:{type:String},
    productname:{type:String},
    categoryname:{type:String},
    description:{type:String},
    price:{type:String},
    size:{type:String},
    banner:{type:String}
})

export default mongoose.model.snitchwishlists||mongoose.model("snitchwishlists",wishlist_schema)