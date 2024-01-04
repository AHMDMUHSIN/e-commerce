import React , {useState} from 'react'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { HiMiniBars3CenterLeft } from "react-icons/hi2"
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiHandbagSimpleThin } from "react-icons/pi";
import { VscClose } from "react-icons/vsc";

const Forgetadminpassword = () => {
    
    const navigate=useNavigate()
    const success = () =>
    toast.success("Password changed",{
       position: "top-right",
       autoClose:2500 ,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true, 
       draggable: true,
       progress: undefined, 
       theme: "dark",
    })

    const [val,setVal]=useState({phone:"",email:"",password:"",})
    const handlechange=(e)=>{
      setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
        console.log(val);
    }
 
    const editPwd=async(e)=>{
        e.preventDefault()
        const res=await axios.get(`http://localhost:3005/snitch/adminusername/${val.phone}`)
        let data=res.data;
        if(data.email===val.email){
          const res=await axios.patch(`http://localhost:3005/snitch/adminpassword/${val.phone}`,{
        password:val.password
      })
    
      if(res.status===200){
        success(setTimeout(()=>{
            navigate("/adminlogin");
        },3000));
      }
      console.log(res.status);
    }else{
      alert("Username and Password does not match")
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




{/* //////////////////////// */}


<div className='userloginhead'>reset password</div>



 

<div className='userloginform2'>




 

  <label className='userloginlabel' htmlFor="">PHONE</label>
  <div> <input type="text" className='userlogininput3'  name='phone'  onChange={handlechange}  /></div>

  <label className='userloginlabel' htmlFor="">E-MAIL</label>
  <div> <input type="text" className='userlogininput3'  name='email'  onChange={handlechange}  /></div>

  <label className='userloginlabel' htmlFor="">enter new PASSWORD</label>
  <div><input type="password" className='userlogininput3'  name='password'  onChange={handlechange}  /></div>




 


  <button onClick={editPwd}  className='btnuserlogin2'>SUBMIT</button>

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

export default Forgetadminpassword
