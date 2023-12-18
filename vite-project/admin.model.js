import mongoose from "mongoose";


const admin_schema=new mongoose.Schema({
  
    username:{type:String,
    required:[true,"Username is required"],
    },
    email:{type:String,
        required:[true,"Username is required"]
       
        },
    phone:{type:String,
            required:[true,"Username is required"]
           
            },
    password:{type:String,
        required:[true,"Password is required"]
    },

})



export default mongoose.model.admins||mongoose.model("admins",admin_schema);