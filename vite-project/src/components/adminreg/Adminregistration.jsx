import React ,{useState} from 'react'
import './adminreg.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Adminregistration = () => {

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
           username:'',
           email:"",
           phone:"",
           password:'',
           confirmpassword:'',

           
   });
   
   const getData=(e)=>{
       setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
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
                <div className="container">
	<div className="screen">
		<div className="screen__content">
            <div className='head'>Register Admin</div>
			<form className="login">
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input"  name='username' placeholder="User name " onChange={getData}  />
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="email" className="login__input" name='email' placeholder="E-mail" onChange={getData}  />
				</div>
                <div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="text" className="login__input" name='phone' placeholder="Phone" onChange={getData}  />
				</div>
                <div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" name='password' placeholder="Password" onChange={getData}  />
				</div>
                <div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" name='confirmpassword' placeholder="Confirm Password" onChange={getData}  />
				</div>
				<div>
                    <button onClick={Registerdata} className='btn'>Register</button>
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
               


			</form>
			
		
		</div>
<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
	
</div>
    </div>
  )
}

export default Adminregistration
