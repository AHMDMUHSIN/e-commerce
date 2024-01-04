import React , { useEffect ,useState} from 'react'
import { HiMiniBars3CenterLeft } from "react-icons/hi2"
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiHandbagSimpleThin } from "react-icons/pi";
import { VscClose } from "react-icons/vsc";
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {

  const success = () =>
  toast.success("Logout Succesful",{
    position: "top-right",
autoClose: 1500,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
  })
     
    // const navigate=useNavigate()
    const [name, setUser] = useState("");
    const [id, setId] = useState("");
    const checkLocalStorage = async () => {
      try {
        const usertoken = JSON.parse(localStorage.getItem("usertoken"));
        if (!usertoken) {
          console.error("Token not found in localStorage");
          return;
        }
        const res = await axios.post(
          "http://localhost:3005/snitch/fetchcustomername",
          null,
          {
            headers: { Authorization: `Bearer ${usertoken}` },
          }
        );
        setUser(res.data.msg);
        setId(res.data.id);
      } catch (error) {
        console.error(error);
      } 
    };
  
    useEffect(() => {
      checkLocalStorage();
    }, []);

    const logoutAdmin = () => {

        localStorage.removeItem("usertoken");
        
        success(setTimeout(()=>{
          window.location.reload();
      },1500));
        
       
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
        <div className='userlogotext' ><Link className='link5' >{name} </Link></div>
        <div className='userlogotext' ><Link className='link5' > </Link></div>
       
    
    </div>
    
    <button type="button" className='homebtn' data-bs-dismiss="offcanvas" ><VscClose /></button>
  </div>
  <div className='offcanvas-borderbottom' ></div>
  <div className="offcanvas-body">
   <div className='offcanvas-body-content'>NEW ARRAIVALS</div>
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
  
   <div onClick={logoutAdmin} className='offcanvas-body-content'><span ><CiLogout /> </span>Log out</div>
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
  </div>
</div>




   <div className='snitchlogo'><Link to={`/`}><img src="../download.png" alt="" /></Link></div>
   <div className='homeicons'>
    
    <div><Link className='link5' to={`/userlogin`}><CiUser /></Link></div>
    <div><CiSearch /></div>
    <Link className='link4' to={`/wishlist/${id}`}><div><CiHeart /></div></Link>
    
    <Link className='link4' to={`/cart/${id}`}><div><PiHandbagSimpleThin /></div></Link>

    
  
   
   </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
