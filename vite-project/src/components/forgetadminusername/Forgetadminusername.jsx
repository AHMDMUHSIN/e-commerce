import React ,{useState}from 'react'
import axios from 'axios';
import { HiMiniBars3CenterLeft } from "react-icons/hi2"
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiHandbagSimpleThin } from "react-icons/pi";
import { VscClose } from "react-icons/vsc";

const Forgetadminusername = () => {

    const [phone, setPhone] = useState("");
    const [emp, setEmp] = useState(""); 
    const [usernameMessage, setUsernameMessage] = useState(""); 
  
    const handleChange = (e) => {
      setPhone(e.target.value);
    };
  
    const getUsername = async (e) => {
      e.preventDefault();
  
      try {
        const res = await axios.get(`http://localhost:3005/snitch/adminusername/${phone}`);
        setEmp(res.data.username);
        setUsernameMessage(` ${res.data.username}`);
      } catch (error) {
        setUsernameMessage("username not found"); // Handle error if username is not found
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




   <div className='snitchlogo'><img src="../../../public/download.png" alt="" /></div>
   <div className='homeicons'>
    
    <div><CiUser /></div>
    <div><CiSearch /></div>
    <div><CiHeart /></div>
    <div><PiHandbagSimpleThin /></div>
   
   </div>
  </div>
</nav>




{/* //////////////////// */}

<div className='userloginhead'>forgot username</div>

<div className='userloginform2'>




 

  <label className='userloginlabel' htmlFor="">PHONE</label>
  <div> <input type="text" className='userlogininput3' onChange={handleChange}  name='phone'    /></div>

  






 


  <button onClick={getUsername} className='btnuserlogin3'>find username</button>

  <label className='userloginlabel' htmlFor=""> username found</label>
  <div> <input type="text" className='userlogininput3' placeholder= {usernameMessage}  name='email'   /></div>

 




 


 </div>

    </div>
  )
}

export default Forgetadminusername
