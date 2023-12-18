import React, {useEffect,useState} from 'react'
import { HiMiniSquaresPlus } from "react-icons/hi2";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Editcategory = () => {

    const success = () =>
    toast.success("Category Edited",{
       position: "top-right",
       autoClose:2500 ,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true, 
       draggable: true,
       progress: undefined, 
       theme: "dark",
    })
    

    const navigate= useNavigate();
    const {id}=useParams()
    const[val,setVal]=useState({
      categoryname:"",
      description:''
    })
   
    console.log(id);
  
    const getData=async()=>{
      const res = await axios.post(`http://localhost:3005/snitch/getcategorydetails/${id}`);
  
      if(res.status==200)
      {
        setVal(res.data)
      }
    }
  
    useEffect(()=>{
      getData()
    },[])
    
    console.log('val',val);

    //////////edit category data//////

    const getDatas=(e)=>{ 
        setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    }

    const editData=async(e)=>{
        e.preventDefault()
        console.log(val)
        
        const res=await axios.patch(`http://localhost:3005/snitch/editcategorydetails/${id}`,{...val})
        if(res.status!=200){
          console.log(res.status);
          alert("Data Not Edited")
        }else{
            success(setTimeout(()=>{
                navigate("/adminhome");
            },3000));
        }
      }







  return (
    <div  className='body'>
    <div className="courses-container">
<div className="course">
    <div className="course-preview">
        <div className='catogory2'> <HiMiniSquaresPlus /></div>
        <div className='cathead'>Edit Category</div>
   
    </div>
    <div className="course-info">
    <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input type="text" className="login__input"  name='categoryname'  value={val.categoryname}  onChange={getDatas}  placeholder="Category Name "  />
            </div>
            <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input type="text" className="login__input"  name='description'  value={val.description}  onChange={getDatas}  placeholder="Description"  />
            </div>
        <div>
        <button  onClick={editData} className="btn1">Submit</button>

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

export default Editcategory
