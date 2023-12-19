import React , {useState} from 'react'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

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
            navigate("/");
        },3000));
      }
      console.log(res.status);
    }else{
      alert("Username and Password does not match")
    }
        }



  return (
    <div>
                    <div className="container">
	<div className="screen2">
		<div className="screen__content">
            <div className='head'>Reset Password</div>
			<form className="login" >
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input2" name='phone'  onChange={handlechange}  placeholder=" Phone Number "   />
				</div>
                <div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input2" name='email' onChange={handlechange}   placeholder="E-mail "   />
				</div>
                <div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="password" className="login__input2" name='password' onChange={handlechange}  placeholder="Enter New Password"   />
				</div>
             
			
               
  
                
               
				<div>
                    <button  onClick={editPwd} className='btn'>Submit</button>
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

export default Forgetadminpassword
