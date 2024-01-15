import React, { useEffect,useState } from 'react'
import axios from 'axios';
import './adminhome.css'
import { FcComboChart } from "react-icons/fc";
import { FcTimeline } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";
import { TbLogout2 } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { FcPositiveDynamic } from "react-icons/fc";
import { BiSolidEditAlt } from "react-icons/bi";
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
  
 ////////// DISPLAY ADMIN NAME //////

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

    useEffect(() => {
      checkLocalStorage();
    }, []);

//////////// LOGOUT ADMIN////////

    const logoutAdmin = () => {
      localStorage.removeItem("admintoken");
      navigate("/");
    };

   

/////////// DISPLAY CATEGORY /////

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
      <div onClick={logoutAdmin}><TbLogout2 /></div>
         <div className='adminname'>{user}</div>
         
      </div>
    </div> 
     <div className='main1'>
        <div className='borderleft'> 
          
        

        <div className='catogories'>
            Categories
        </div>
        {
            getCate.map((data,index)=>
            <div key={index} className='catogoryname'>
               <Link to={`/viewproducts/${data.categoryname}`} className='catogoryname2'>
               <div >
                 {data.categoryname}
                </div>
               </Link>
                <div className='edit'>
                <Link to={`/editcategory/${data._id}`} className='link6'><BiSolidEditAlt /></Link>
                
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
                 <div className='sales'><FcPositiveDynamic /></div>
                 <div>sales</div>
              </div>
              <div className='cards'>
                 <div className='orders'><FcComboChart /></div>
                 <div>orders</div>
              </div>
             <Link to={`/category`} className='link5'>
             <div className='cards'>
              <div className='catogory'><FcTimeline /></div>
                 <div>add  category</div>
              </div>
             </Link>
              <Link to={`/products`} className='link5'>
              <div className='cards'>
              <div className='products'><FcTodoList /></div>
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
