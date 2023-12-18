import React, { useEffect,useState } from 'react'
import axios from 'axios';
import './adminhome.css'
import { PiLineSegmentsThin } from "react-icons/pi";
import { FaOpencart } from "react-icons/fa6";
import { HiSquaresPlus } from "react-icons/hi2";
import { BsAppIndicator } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";
import { MdOutlineEditNote } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Adminhome = () => {

   const success = () =>
   toast.success("Category deleted",{
      position: "top-right",
      autoClose:1500 ,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true, 
      draggable: true,
      progress: undefined, 
      theme: "dark",
   })


   
   const [count,setCount]=useState(0)
   const [user, setUser] = useState("");
   const navigate = useNavigate();
  
 ////////// DISPLAY ADMIN NAME ///////

   const checkLocalStorage = async () => {
      try {
        const admintoken = JSON.parse(localStorage.getItem("admintoken"));
        if (!admintoken) {
          console.error("Token not found in localStorage");
          return;
        }
        const res = await axios.post(
          "http://localhost:3005/snitch/fetchadminusername",
          null,
          {
            headers: { Authorization: `Bearer ${admintoken}` },
          }
        );
        setUser(res.data.msg);
      } catch (error) {
        console.error(error);
      } 
    };

//////////// LOGOUT ADMIN////////

    const logoutAdmin = () => {
      localStorage.removeItem("admintoken");
      navigate("/");
    };

    useEffect(() => {
      checkLocalStorage();
    }, []);

//////////// DISPLAY CATEGORY ////////   

    const [getCate,setCategory]=useState([])
    const getCategory=async()=>{
        const res=await axios.get("http://localhost:3005/snitch/getcategory")
        setCategory(res.data)
        }
    
        useEffect(()=>{
            getCategory()
        })



        const deleteCategory = async (id) => {
         const isConfirmed = window.confirm("Are you sure you want to delete this Category?");
      
         if (isConfirmed) {
         try {
         const res = await axios.delete(`http://localhost:3005/snitch/deletecategory/${id}`);
            console.log('Category deleted:', res.data);

            success();
            setTimeout(()=>{
                navigate("/adminhome");
            },3000);

           } catch (error) {
            console.error('Error deleting Category:', error);
           }
         } else {
         console.log('Deletion cancelled.');
         }
         setCount(count+1)
    }
      
      useEffect(()=>{
    },[count])





  return (
    <div className='main'>
        
     
     <div className='bordertop'>
      <div className='bordertop2'>
        <img src="./download.png" alt="" />
      </div>
      <div className='adminnamemain'>
       
         <div className='adminname'>{user}</div>
         <div onClick={logoutAdmin}><TbLogout2 /></div>
      </div>
    </div> 
     <div className='main1'>
        <div className='borderleft'> 
          
        

        <div className='catogories'>
            Catogories
        </div>
        {
            getCate.map((data,index)=>
            <div key={index} className='catogoryname'>
                <div className='catogoryname2'>
                 {data.categoryname}
                </div>
                <div className='edit'>
                <Link to={`/editcategory/${data._id}`} className='link3'><MdOutlineEditNote /></Link>
                
                </div>
                <div onClick={() => deleteCategory(data._id)} className='delete'>
                <MdDelete />
                </div>
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
            </div>
            
            )
          }
       
       

        </div>
        <div className='main1content'>
           <div className='main1content2'>
              <div className='cards'>
                 <div className='sales'><PiLineSegmentsThin /></div>
                 <div>sales</div>
              </div>
              <div className='cards'>
                 <div className='orders'><FaOpencart /></div>
                 <div>orders</div>
              </div>
             <Link to={`/category`} className='link3'>
             <div className='cards'>
              <div className='catogory'><HiSquaresPlus  cx="0"  /></div>
                 <div>add  category</div>
              </div>
             </Link>
              <Link to={`/products`} className='link3'>
              <div className='cards'>
              <div className='products'><BsAppIndicator /></div>
                 <div>add  products</div>
              </div>
              </Link>
             
           </div>
           <div className='main1contentborder1 '>

           </div>

        </div>
            
        
     </div>
    </div>
  )
}

export default Adminhome
