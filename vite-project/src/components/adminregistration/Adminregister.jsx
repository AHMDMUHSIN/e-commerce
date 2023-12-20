import React  from 'react'
import './adminreg2.css'
import { HiMiniBars3CenterLeft } from "react-icons/hi2"
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiHandbagSimpleThin } from "react-icons/pi";
import { VscClose } from "react-icons/vsc";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Adminregister = () => {

    const success = () =>
    toast.success("Succesfully Registered",{
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
           username:"",
           email:"",
           phone:"",
           password:"",
           confirmpassword:"",

           
   });
   
   const getData=(e)=>{
       setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
       console.log(val);
   }
   
   
   const Registerdata=async(e)=>{
       e.preventDefault();
       console.log({...val});
       
       const res=await axios.post("http://localhost:3005/snitch/addadmin",{...val});
         
       if(res.status!=201){
         alert("Data Not Added")
       }
       if (val.password!=val.confirmpassword){
		alert("Does not match the password")
       }
       else{
           success();
           setTimeout(()=>{
               navigate("/");
           },3000);
       }

   }





  return (
    <div>
                <nav className="navbar navbar-light  navbar-main">
  <div className='navbarcontent'>
   
   <button className='homebtn' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"> <div><HiMiniBars3CenterLeft />
   </div></button>

<div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false"  id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header">
    <div className='offcanvas-header2'>
        <div className='userlogo'><CiUser /></div>
        <div className='userlogotext' >LOG IN </div>
       
    
    </div>
    
    <button type="button" className='homebtn' data-bs-dismiss="offcanvas" ><VscClose /></button>
  </div>
  <div className='offcanvas-borderbottom' ></div>
  <div className="offcanvas-body">
   <div className='offcanvas-body-content'>NEW ARRAIVALS</div>
   <div className='offcanvas-borderbottom' ></div>
   <div className='offcanvas-body-content'>MOST TRENDING</div>
   <div className='offcanvas-borderbottom' ></div>
   <div className='offcanvas-body-content'>SHOP 
   </div>
   <div className='offcanvas-borderbottom' ></div>
   <div className='offcanvas-body-content'>TRACK ORDER</div>
   <div className='offcanvas-borderbottom' ></div>
   <div className='offcanvas-body-content2main'>
   <div className='offcanvas-body-content2'>PLACE A </div>
   <div className='offcanvas-body-content2'>RETURN  / EXCHANGE</div>
   <div className='offcanvas-body-content2'>REQUEST</div>
   </div>
   <div className='offcanvas-borderbottom' ></div>
   <div className='offcanvas-body-content'>CUSTOMER SUPPORT</div>
   <div className='offcanvas-borderbottom' ></div>
   <div className='offcanvas-body-content'>VISIT STORE</div>
   <div className='offcanvas-borderbottom' ></div>
   <div className='offcanvas-body-content'>RELOVE</div>
   <div className='offcanvas-borderbottom' ></div>
  </div>
</div>




   <div className='snitchlogo'><img src="../../../public/download.png" alt="" /></div>
   <div className='homeicons'>
    
    <div><CiUser /></div>
    <div><CiSearch /></div>
    <div><CiHeart /></div>
    <div><PiHandbagSimpleThin /></div>
   
   </div>
  </div>
</nav>

{/* ////////////////////// */}

  

   <div className='userloginhead2'>CREATE ACCOUNT</div>

  <div className='userloginform2'>


 <label className='userloginlabel' htmlFor="">USER NAME</label>
  <div><input type="text" className='userlogininput3'  name='username'  onChange={getData}  /></div>

   <label className='userloginlabel' htmlFor="">E-MAIL</label>
   <div> <input type="text" className='userlogininput3'  name='email'  onChange={getData}  /></div>

   <label className='userloginlabel' htmlFor="">PHONE</label>
   <div> <input type="text" className='userlogininput3'   name='phone'  onChange={getData}  /></div>

   <label className='userloginlabel' htmlFor="">PASSWORD</label>
   <div><input type="password" className='userlogininput3'  name='password'  onChange={getData}  /></div>

   <label className='userloginlabel' htmlFor="">CONFIRM PASSWORD</label>
   <div> <input type="password" className='userlogininput3'  name='confirmpassword'  onChange={getData}  /></div>


  


   <button onClick={Registerdata}  className='btnuserlogin2'>SUBMIT</button>

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
  )
}

export default Adminregister
