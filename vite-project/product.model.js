import mongoose from "mongoose";


const product_schema=new mongoose.Schema({
  
    name:{type:String,
        required:[true,"Username is required"],
    },
    description:{type:String,
        required:[true,"Username is required"]
       
    },
    categoryname:{type:String,
        required:[true,"Username is required"],
    },
    price:{type:String,
            required:[true,"Username is required"]
           
    },
    size:{
        S:{type:String},
        M:{type:String},
        L:{type:String},
        XL:{type:String},
    },
    image:{type:String,
            required:[true,"Username is required"]
           
    },
    stock:{type:String,
        required:[true,"Username is required"]
       
    },

})



export default mongoose.model.product||mongoose.model("product",product_schema);