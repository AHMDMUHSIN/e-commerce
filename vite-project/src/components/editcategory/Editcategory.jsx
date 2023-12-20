import React , {useState ,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { FcTimeline } from "react-icons/fc";

const Editcategory = () => {




  const success = () =>
  toast.success("Category Edited",{
     position: "top-right",
     autoClose:1500 ,
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
    <div>
          <div className='cmain'>

<div className="modal1">
<form className="form">
  <div className='head2'>
  <div></div>
  <div className='chead'> Edit Category</div>
  </div> 
  
  <div className="credit-card-info--form">
    <div className="input_container">
      <label  className="input_label">Category Name</label>
      <input id="password_field" className="input_field" type="text" value={val.categoryname}  onChange={getDatas} name='categoryname' title="Inpit title" placeholder=""/>
    </div>
    <div className="input_container">
      <label  className="input_label">Description</label>
      <textarea className="input_field2"  id="" cols="30" name='description'  value={val.description}  onChange={getDatas}   rows="10"></textarea>
     
    </div>
 
  </div>
    <button onClick={editData}  className="purchase--btn">Edit</button>
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

export default Editcategory
