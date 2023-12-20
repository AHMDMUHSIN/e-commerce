import React , {useState} from 'react'
import './category.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcTimeline } from "react-icons/fc";

const Products = () => {


   
    const success = () =>
    toast.success("Category Added",{
       position: "top-right",
       autoClose:1500 ,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true, 
       draggable: true,
       progress: undefined, 
       theme: "dark",
    })
   const navigate=useNavigate()
   const[val,setVal]=useState({
           categoryname:'',
           description:"",
           

           
   });
   
   const getData=(e)=>{
       setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
   }
   
   
   const addData=async(e)=>{
       e.preventDefault();
       console.log({...val});
       
       const res=await axios.post("http://localhost:3005/snitch/addcategory",{...val});
         
       if(res.status!=201){
         alert("Data Not Added")
       }
      
       else{
           success();
           setTimeout(()=>{
               navigate("/adminhome");
           },3000);
       }
   }




  return (
    <div >
        <div className='cmain'>

<div className="modal1">
<form className="form">
  <div className='head2'>
  <div><FcTimeline /></div>
  <div className='chead'> Add Category</div>
  </div> 
  
  <div className="credit-card-info--form">
    <div className="input_container">
      <label  className="input_label">Category Name</label>
      <input id="password_field" className="input_field" type="text" onChange={getData} name='categoryname' title="Inpit title" placeholder=""/>
    </div>
    <div className="input_container">
      <label  className="input_label">Description</label>
      <textarea className="input_field2"  id="" cols="30" name='description'  onChange={getData} rows="10"></textarea>
     
    </div>
 
  </div>
    <button onClick={addData} className="purchase--btn">Add</button>
    <ToastContainer 
				
				position="top-right" 
				autoClose={1500}
				hideProgressBar={false} 
				newestOnTop={false} 
				closeOnClick 
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				
				/>
</form>
</div>
</div> 
    </div>
  )
}

export default Products


