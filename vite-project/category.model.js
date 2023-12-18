import mongoose from "mongoose";


const category_schema=new mongoose.Schema({
  
    categoryname:{type:String,
    required:[true,"Username is required"],
    },
    description:{type:String,
        required:[true,"Username is required"]
       
    },

})



export default mongoose.model.category||mongoose.model("category",category_schema);