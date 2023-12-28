import bcrypt from 'bcrypt';
import pkg from "jsonwebtoken";
import admin_schema from './admin.model.js'
import category_schema from './category.model.js'
import product_schema from './product.model.js'
import customer_schema from './customer.model.js'


 

const {sign}=pkg;


/////////////////Admin////////

export async function addAdmin(req,res){
    try {
        console.log(req.body);
        console.log(req.body);
        const {username,password,phone,confirmpassword,email}=req.body;
        console.log(username,password,phone,confirmpassword,email,);
        if(!(username&&password&&phone&&confirmpassword&&email))
        return res.status(404).send("fields are empty")
        if(password!=confirmpassword)
        return res.status(404).send("password and confirm password are not same")
       
        bcrypt.hash(password,10)    
        .then((hashedPwd)=>{
            admin_schema.create({username,password:hashedPwd,phone,confirmpassword,email});
        })
        .then(()=>{
            res.status(201).send("sucessfully registered")
        })
      .catch((error)=>{
        res.status(500).send(error)
       })
        
       } catch (error) {
        console.log(error);
    
    }
}

export async function adminLogin(req, res) {
    try {
     console.log(req.body);
     const { username, password } = req.body;
     const usr = await admin_schema.findOne({ username })
     console.log(usr);
     if (usr === null) return res.status(404).send("username or password doesnot exist");
     const success =await bcrypt.compare(password, usr.password)
     console.log(success);
     if (success !== true) return res.status(404).send("username or password doesnot exist");
     const token = await sign({ username }, process.env.JWT_KEY, { expiresIn: "24h" })
     console.log(token);
     res.status(200).send({ msg: "successfullly login", token })
     res.end();
     
    } catch (error) {
     console.log(error);
     
    }
   }

   export async function forgotAdminusername(req,res){
    const phone=req.params;
    console.log(phone);
    let task=await admin_schema.findOne(phone)
    console.log(task);
    res.status(200).send(task)
}

export async function forgotAdminpassword(req, res) {
    const phone = req.params.phone;
    const updatedPassword = req.body.password;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(updatedPassword, saltRounds);
    let task = await admin_schema.updateOne({ phone }, { $set: { password: hashedPassword } });
    
    res.status(200).send(task);
}

export async function fetchAdminusername(req, res) {
    try {
        const {username}=req.user;
         res.status(200).send({ msg:username });
        res.end()
      } catch (error) {
        res.status(404).send(error);
      }
}


/////////category//////////////



export async function addCategory(req, res) {
    try {
        console.log("hai", req.body);
        const { categoryname,description} = req.body;
        console.log(categoryname,description,);
        if(!(categoryname&&description))
        return res.status(404).send("fields are empty")

        await category_schema.create({categoryname,description }); 

        res.status(201).send("Category Sucessfully Added");
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message || "Internal Server Error");
    }
}

export async function getCategory(req,res){
    let task=await category_schema.find()
    res.status(200).send(task)
}

export async function getcategoryfulldata(req,res){
    const{id}=req.params;
    console.log(id);
    let task=await category_schema.findOne({_id:id})
    console.log(task);
    res.status(200).send(task)
}

export async function editCategorydetails(req, res) {
    const { id } = req.params;
    try {
        const updatedData = req.body;
        const value = await category_schema.updateOne({ _id: id }, { $set: updatedData });
        res.status(200).send(value);
    } catch (error) {
        res.status(404).send(error);
    }
}

export function deleteCategory(req,res)
{
    const{id}=req.params;
    const data= category_schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)
    }).catch((error)=>{
        res.status(404).send(error)
    })
}




////////////product//////////


export async function AddProducts(req, res) {
    try {
    
      const { ...productdetails } = req.body;
      const task=await product_schema.create({ ...productdetails });
      console.log(task);
      res.status(200).send({result : task});
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  export async function getCategoryWisedProduct(req, res) {
    try {
      const { categoryname } = req.params;
      const products = await product_schema.find({ categoryname: categoryname });
  
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  export async function getProduct(req,res){
    const { id }=req.params;
    console.log(id);
    let task=await product_schema.findOne({ _id:id })
    console.log(task);
    res.status(200).send(task)
  }
  
  export async function editProdect(req, res) {
    const { id } = req.params;
    try {
        const updatedData = req.body;
        const value = await product_schema.updateOne({ _id: id }, { $set: updatedData });
        res.status(200).send(value);
    } catch (error) {
        res.status(404).send(error);
    }
  }

  export function deleteProduct(req,res)
{
    const{id}=req.params;
    const data= product_schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)
    }).catch((error)=>{
        res.status(404).send(error)
    })
}
  
 


  ///////////////customer//////////////

  export async function addCustomer(req,res){
    try {
        console.log(req.body);
        const {name,password,phone,confirmpassword,email,address,location,pincode,profilephoto}=req.body;
        console.log(name,password,phone,confirmpassword,email,address,location,pincode,profilephoto);
        if(!(name&&password&&phone&&confirmpassword&&email&&address&&location&&pincode&&profilephoto))
        return res.status(404).send("fields are empty")
        if(password!=confirmpassword)
        return res.status(404).send("password and confirm password are not same")
       
        bcrypt.hash(password,10)    
        .then((hashedPwd)=>{
            customer_schema.create({name,password:hashedPwd,phone,confirmpassword,email,address,location,pincode,profilephoto});
        })
        .then(()=>{
            res.status(201).send("sucessfully registered")
        })
      .catch((error)=>{
        res.status(500).send(error)
       })
        
       } catch (error) {
        console.log(error);
    
    }
}


export async function userLogin(req, res) {
    try {
     console.log(req.body);
     const { name, password } = req.body;
     const usr = await customer_schema.findOne({ name })
     console.log(usr);
     if (usr === null) return res.status(404).send("username or password doesnot exist");
     const success =await bcrypt.compare(password, usr.password)
     console.log(success);
     if (success !== true) return res.status(404).send("username or password doesnot exist");
     const token = await sign({ name }, process.env.JWT_KEY, { expiresIn: "24h" })
     console.log(token);
     res.status(200).send({ msg: "successfullly login", token })
     res.end();
     
    } catch (error) {
     console.log(error);
     
    }
   }


export async function fetchCustomername(req, res) {
    try {
        const { name}=req.user;
         res.status(200).send({ msg:name });
        res.end()
      } catch (error) {
        res.status(404).send(error);
      }
}

