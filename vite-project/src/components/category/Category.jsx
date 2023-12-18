import React , {useState} from 'react'
import './category.css'
import { HiMiniSquaresPlus } from "react-icons/hi2";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Category = () => {


   
    const success = () =>
    toast.success("Category Added",{
       position: "top-right",
       autoClose:2500 ,
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
    <div  className='body'>
        <div className="courses-container">
	<div className="course">
		<div className="course-preview">
            <div className='catogory2'> <HiMiniSquaresPlus /></div>
            <div className='cathead'>Add Category</div>
       
		</div>
		<div className="course-info">
        <div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input"  name='categoryname' onChange={getData} placeholder="Category Name "  />
				</div>
                <div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input"  name='description' onChange={getData} placeholder="Description"  />
				</div>
			<div>
            <button onClick={addData} className="btn1">Submit</button>
            <ToastContainer 
				
				position="top-right" 
				autoClose={2500}
				hideProgressBar={false} 
				newestOnTop={false} 
				closeOnClick 
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				
				/>
            </div>
		</div>
	</div>
</div>




    </div>
  )
}

export default Category
