import React , {useState} from 'react'
import { HiMiniBars3CenterLeft } from "react-icons/hi2"
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiHandbagSimpleThin } from "react-icons/pi";
import { VscClose } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './adminlogin1.css'

const AdminLogin = () => {

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
   const [username,setUser]=useState("");
   const [password,setPassword]=useState("");
   
   const handleLogin = async (e) => {
     e.preventDefault()
     try {
       const response = await axios.post("http://localhost:3005/snitch/adminlogin", {
   
       username: username,
       password: password
       });
   
       const data = response.data;
       console.log(data);
   
       if (response.status !== 404) {
       const token = data.token;
       localStorage.setItem("admintoken", JSON.stringify(token));
       success(setTimeout(()=>{
           navigate("/adminhome");
       },3000),{ state: { username } });
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

  

   <div className='userloginhead'>ADMIN LOGIN</div>

  <div className='userloginform'>
  <label className='userloginlabel' htmlFor="">USER NAME</label>
   <div className='userlogininput'><input   onChange={(e) => setUser(e.target.value)} type="text" /></div>
   <label className='userloginlabel' htmlFor="">PASSWORD</label>
   <div className='userlogininput2'><input  onChange={(e) => setPassword(e.target.value)} type="password" /></div>

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

   <div className='createaccount'><Link to={`/adminregister`} className='link3'>CREATE ACCOUNT</Link></div>


  
   

  </div>

    </div>
  )
}

export default AdminLogin
