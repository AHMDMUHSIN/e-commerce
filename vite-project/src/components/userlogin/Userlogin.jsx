import React, {useState}  from 'react'
import './userlogin.css'
import { HiMiniBars3CenterLeft } from "react-icons/hi2"
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiHandbagSimpleThin } from "react-icons/pi";
import { VscClose } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Userlogin = () => {

  const success = () =>
  toast.success("Login Succesful",{
    position: "top-right",
autoClose: 1500,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
  })
 
 
 
 
 const navigate=useNavigate()
 const [name,setUser]=useState("");
 const [password,setPassword]=useState("");
 
 const handleLogin = async (e) => {
   e.preventDefault()
   try {
     const response = await axios.post("http://localhost:3005/snitch/userlogin", {
 
     name: name,
     password: password
     });
 
     const data = response.data;
     console.log(data);
 
     if (response.status !== 404) {
     const token = data.token;
     localStorage.setItem("usertoken", JSON.stringify(token));
     success(setTimeout(()=>{
         navigate("/");
     },3000),{ state: { name} });
     } else {
     alert(data.msg);
     }
   } catch (error) {
     alert("Server not connected");
   }
 };






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




   <div className='snitchlogo'><img src="../download.png" alt="" /></div>
   <div className='homeicons'>
    
    <div><CiUser /></div>
    <div><CiSearch /></div>
    <div><CiHeart /></div>
    <div><PiHandbagSimpleThin /></div>
   
   </div>
  </div>
</nav>

{/* ////////////////////// */}

  

   
<div className='userloginhead'> LOGIN</div>

<div className='userloginform'>
<label className='userloginlabel' htmlFor="">USER NAME</label>
 <div className='userlogininput'><input  onChange={(e) => setUser(e.target.value)}   type="text" /></div>
 <label className='userloginlabel' htmlFor="">PASSWORD</label>
 <div className='userlogininput2'><input   onChange={(e) => setPassword(e.target.value)} type="password" /></div>

 <div className='forget' > Forget  <Link to={`/forgetadminusername`} className='link2'> Username </Link> Or <Link to={`/forgetadminpassword`} className='link2'> Password</Link></div>


 <button onClick={handleLogin} className='btnuserlogin'>LOG IN</button>
 <ToastContainer 
				
				position="top-right"
autoClose={1500}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
				
				/>

 

 <div className='createaccount'><Link to={`/userreg`} className='link3'>CREATE ACCOUNT</Link></div>



 

</div>

{/* /////////////// footer////////// */}


<div className='footer-top-border'></div>

<div className='footer1'>
  <div className='footer-contents'>
    <div className='footer-contents-head'>VISIT OFFLINE STORE</div>
    <div className='footer-content'>Jayanagar, Bangalore:</div>
    <div className='footer-content'><a href="">Get Directions</a></div>
    <div className='footer-content'></div>

  </div>
  <div className='footer-border'></div>
  <div className='footer-contents'>
    <div className='footer-content'>Contact Us</div>
    <div className='footer-content'>FAQ</div>
    <div className='footer-content'>Blogs</div>
    <div className='footer-content'>Terms & Conditions</div>
    
    <div className='footer-content'></div>

  </div>
  <div className='footer-border'></div>
  <div className='footer-contents'>
    <div className='footer-content'>TRACK ORDER</div>
    <div className='footer-content'>PLACE RETURN/EXCHANGE REQUEST</div>
    <div className='footer-content'>RETURNS/EXCHANGE POLICY</div>
    <div className='footer-content'></div>

  </div>
  <div className='footer-border'></div>
  <div className='footer-contents'>
    <div className='footer-contents-head'>CUSTOMER CARE</div>
    <div className='footer-content'>Timings: 10 AM - 8 PM (Mon - Sun)</div>
    <div className='footer-content'>Whatsapp : +91 6366966283</div>
    <div className='footer-content'>Instagram: @snitch.co.in</div>
   
    <div className='footer-content'></div>

  </div>
 

</div>

<div className='copyright'>© 2023 SNITCH | All Rights Reserved</div>



    </div>
  )
}

export default Userlogin
